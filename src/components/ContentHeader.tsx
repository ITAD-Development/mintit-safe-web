import { FC } from "react";
import { Link } from "react-router-dom";

type ContentHeaderProps = {
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
};

const ContentHeader: FC<ContentHeaderProps> = ({ setIsOpen, isOpen }) => {
  return (
    <div className="flex flex-col absolute right-0 left-0 bg-white z-10">
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
          <Link
            className="text-zinc-800 text-sm font-normal leading-[18px]"
            to="/download"
          >
            앱 다운로드
          </Link>
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
    </div>
  );
};

export default ContentHeader;
