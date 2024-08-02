import { FC } from "react";
import { Link } from "react-router-dom";

type ContentHeaderProps = {
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
  enableAppDownload?: boolean;
};

export const APP_DOWNLOAD_HEADER_HEIGHT = 58;
export const APP_TOP_MENU_HEIGHT = 60;
export const APP_HEADER_HEIGHT =
  APP_DOWNLOAD_HEADER_HEIGHT + APP_TOP_MENU_HEIGHT;

const ContentHeader: FC<ContentHeaderProps> = ({
  setIsOpen,
  isOpen,
  enableAppDownload,
}) => {
  return (
    <div className="flex flex-col absolute right-0 left-0 bg-white z-20">
      {enableAppDownload && (
        <div
          className="flex xl:hidden justify-between items-center px-6 py-[15px] border-b	"
          style={{
            backgroundColor: "#F8F8F8",
            height: APP_DOWNLOAD_HEADER_HEIGHT,
          }}
        >
          <div className="flex gap-2 items-center">
            <img src="/square-logo-28x28.svg" />
            <div className="text-zinc-800 text-sm font-normal leading-[18px]">
              민팃세이프 앱으로 편하게
            </div>
          </div>
          <div className="h-[26px] px-4 py-1 bg-white rounded-[97px] border border-zinc-800 justify-center items-center gap-2.5 inline-flex">
            <Link
              className="text-zinc-800 text-sm font-normal leading-[18px]"
              to="/download"
            >
              앱 다운로드
            </Link>
          </div>
        </div>
      )}
      <header
        className="flex justify-between items-center px-6 py-[10px] border-b"
        style={{
          height: APP_TOP_MENU_HEIGHT,
        }}
      >
        <img
          src="/square-logo.svg"
          className="rounded-md"
          style={{
            filter: "drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.10))",
          }}
        />
        <img
          className="cursor-pointer"
          src="/hamburgur.svg"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
      </header>
    </div>
  );
};

export default ContentHeader;
