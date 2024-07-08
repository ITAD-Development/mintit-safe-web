import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClose: () => void;
};

const Popup: React.FC<Props> = ({ children, onClose }) => {
  return (
    <div className="absolute flex flex-col top-0 right-0 bottom-0 left-0 inset-0 bg-white z-40">
      <div className="flex p-5 border-b-2">
        <div className="flex-1"></div>
        <div className="w-20" onClick={onClose}>
          닫기
        </div>
      </div>
      <div className="flex-1 overflow-y-scroll no-scrollbar py-8 px-4">
        {children}
      </div>
    </div>
  );
};

export default Popup;
