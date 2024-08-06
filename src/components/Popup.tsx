import React, { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
  onClose: () => void;
};

const Popup: React.FC<Props> = ({ title, children, onClose }) => {
  return (
    <div className="absolute flex flex-col top-0 right-0 bottom-0 left-0 inset-0 bg-white z-40">
      <div
        className="flex flex-col overflow-y-scroll no-scrollbar px-6 relative right-0 bottom-0 left-0 top-0 z-1"
        style={{
          borderTopWidth: 64,
          borderColor: "#fff",
          height: "100dvh",
          paddingBottom: 64,
        }}
      >
        {children}
      </div>
      <div className="absolute top-0 left-0 right-0 h-16 py-2 flex z-2">
        <div className="h-12 px-6 py-3 backdrop-blur-xl justify-start items-center gap-3 flex w-full">
          <div className="flex-col justify-center items-start gap-3 flex flex-1">
            <div className="text-center text-zinc-800 text-base font-semibold leading-tight">
              {title}
            </div>
          </div>
          <div className="w-6 h-6 relative cursor-pointer" onClick={onClose}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 6L18 18" stroke="#333333" strokeLinecap="round" />
              <path d="M18 6L6 18" stroke="#333333" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
