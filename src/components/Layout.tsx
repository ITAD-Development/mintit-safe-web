import { FC, PropsWithChildren, useEffect, useRef, useState } from "react";
import usePopupStore from "../stores/usePopupStore";
import AgreementPopup from "./AgreementPopup";
import CertificationPopup from "./CertificatePopup";
import ContentHeader from "./ContentHeader";
import Footer from "./Footer";
import Header from "./Header";
import MainFloatingLeft from "./MainFloatingLeft";
import PrivacyPopup from "./PrivacyPopup";
import SideMenu from "./SideMenu";
import TermsPopup from "./TermsPopup";

type Props = {
  className?: string;
  style?: React.CSSProperties;
  enableAppDownload?: boolean;
};

const Layout: FC<PropsWithChildren<Props>> = ({
  children,
  className,
  style,
  enableAppDownload = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const isOpenTerms = usePopupStore((state) => state.isOpenTerms);
  const isOpenPrivacy = usePopupStore((state) => state.isOpenPrivacy);
  const isOpenAgreement = usePopupStore((state) => state.isOpenAgreement);
  const isOpenCertification = usePopupStore(
    (state) => state.isOpenCertification
  );

  const [contentHeight, setContentHeight] = useState(0);
  const congtentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // congtentRef를 observe하여 height를 조절 화면의 높이에 맞게 조절, 브라우저의 크기 변경시에도 조절 될것
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContentHeight(entry.contentRect.height);
      }
    });
    if (congtentRef.current) {
      resizeObserver.observe(congtentRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      className="flex flex-col"
      style={{
        backgroundImage: "url('/images/bg.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100dvh",
      }}
    >
      <Header />
      <div
        className="flex flex-1 flex-row"
        style={{
          height: "calc(100vh - 80px)",
        }}
      >
        <div className="xl:flex-1 hidden xl:block">
          <MainFloatingLeft />
        </div>
        <div className="flex justify-center h-full xl:justify-start flex-1">
          <div className="w-full md:w-[420px] bg-white min-w-[360px] flex flex-col h-full">
            <div className="flex flex-col h-full overflow-hidden relative">
              <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} />
              <div
                ref={congtentRef}
                style={{
                  height: "100dvh",
                }}
              >
                <div
                  style={{ height: contentHeight }}
                  className="flex flex-col no-scrollbar overflow-y-scroll"
                >
                  <ContentHeader
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    enableAppDownload={enableAppDownload}
                  />
                  <>
                    <main className={`flex-1 ${className}`} style={style}>
                      {children}
                    </main>
                    <Footer />
                  </>
                </div>
              </div>
              {isOpenTerms && <TermsPopup />}
              {isOpenPrivacy && <PrivacyPopup />}
              {isOpenCertification && <CertificationPopup />}
              {isOpenAgreement && <AgreementPopup />}
            </div>
            <div className="relative">
              <div className="absolute z-10 right-[-322px] bottom-[170px] hidden lg:block">
                <img src="/images/main/fab.png" className="w-[114px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
