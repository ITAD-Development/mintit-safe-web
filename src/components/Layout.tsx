import { useScreenSize } from "@hooks/useScreenSize";
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
  hasBorder?: boolean;
};

const Layout: FC<PropsWithChildren<Props>> = ({
  children,
  className,
  style,
  enableAppDownload = true,
  hasBorder = false,
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
  const { isUnderLG } = useScreenSize();

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
        backgroundImage: isUnderLG ? undefined : "url('/images/bg.png')",
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
        <div className="lg:flex-1 hidden lg:block">
          <MainFloatingLeft />
        </div>
        <div className="flex justify-center h-full lg:justify-start flex-1">
          <div className="w-full max-w-[420px] bg-white min-w-[320px] flex flex-col h-full">
            <div
              className="flex flex-col h-full overflow-hidden relative"
              style={{
                borderLeft: isUnderLG ? "1px solid #e7e7e7" : undefined,
                borderRight: isUnderLG ? "1px solid #e7e7e7" : undefined,
              }}
            >
              <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} />
              <div
                ref={congtentRef}
                style={{
                  height: "100dvh",
                }}
              >
                <div
                  style={{
                    height: contentHeight,
                  }}
                  className="flex flex-col no-scrollbar overflow-y-scroll"
                >
                  <ContentHeader
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    enableAppDownload={enableAppDownload}
                    hasBorder={hasBorder}
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
          </div>
          <div className="flex-1 relative lg:block hidden">
            <div className="flex items-end lg:pb-[192px] lg:pl-[20px] xl:pl-[208px] h-full">
              <img
                src="/images/main/fab.png"
                style={{
                  width: 114,
                  height: 257,
                  minWidth: 114,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
