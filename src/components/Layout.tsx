import { FC, PropsWithChildren, useState } from "react";
import { Link } from "react-router-dom";
import usePopupStore from "../stores/usePopupStore";
import CertificationPopup from "./CertificatePopup";
import Footer from "./Footer";
import PrivacyPopup from "./PrivacyPopup";
import TermsPopup from "./TermsPopup";

type Props = {
  className?: string;
};
const Layout: FC<PropsWithChildren<Props>> = ({ children, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isOpenTerms = usePopupStore((state) => state.isOpenTerms);
  const isOpenPrivacy = usePopupStore((state) => state.isOpenPrivacy);
  const isOpenCertification = usePopupStore(
    (state) => state.isOpenCertification
  );

  return (
    <div className="h-screen justify-center flex">
      <div className="sm:w-[420px] min-w-[360px] flex flex-col h-full relative overflow-hidden">
        <div className="flex justify-between items-center px-6 py-[15px] border-b	 ">
          <div className="flex gap-2 items-center">
            <img
              src="/square-logo.svg"
              className="w-[28px] h-[28px] rounded-sm"
            />
            <div className="text-zinc-800 text-sm font-normal leading-[18px]">
              민팃세이프 앱으로 편하게
            </div>
          </div>
          <div className="h-[26px] px-4 py-1 bg-white rounded-[97px] border border-zinc-800 justify-center items-center gap-2.5 inline-flex">
            <div className="text-zinc-800 text-sm font-normal leading-[18px]">
              앱 다운로드
            </div>
          </div>
        </div>
        <header className="flex justify-between items-center px-6 py-[10px] border-b	 ">
          <img src="/square-logo.svg" />
          <img
            src="/hamburgur.svg"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </header>
        {/* Overlay */}
        {isOpen && (
          <div
            className="absolute top-0 right-0 bottom-0 left-0 inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsOpen(false)}
          ></div>
        )}

        {/* Side menu */}
        <div
          className={`absolute top-0 right-0 w-4/5 h-full bg-white transform transition-transform z-50 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            className="absolute top-5 right-5 p-3 focus:outline-none"
            onClick={() => setIsOpen(false)}
          >
            <span className="block w-6 h-0.5 bg-gray-600 rotate-45"></span>
            <span className="block w-6 h-0.5 bg-gray-600 -rotate-45"></span>
          </button>
          <nav className="mt-16 p-4">
            <ul>
              <li className="mb-4">
                <Link to="/" className="text-gray-800">
                  MINTIT safe 소개
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/guide" className="text-gray-800">
                  MINTIT safe Guide
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/download/aos" className="text-gray-800">
                  MINTIT safe Download
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/histories" className="text-gray-800">
                  내 삭제 이력
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex-1 h-full no-scrollbar overflow-y-scroll">
          <main className={`${className}`}>{children}</main>
          <Footer />
        </div>
        {isOpenTerms && <TermsPopup />}
        {isOpenPrivacy && <PrivacyPopup />}
        {isOpenCertification && <CertificationPopup />}
      </div>
    </div>
  );
};

export default Layout;
