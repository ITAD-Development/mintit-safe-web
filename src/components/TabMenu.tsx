import React from "react";
import { Link } from "react-router-dom";

type Props = {
  activeIndex: number;
};
const TabMenu: React.FC<Props> = ({ activeIndex }) => {
  return (
    <div className="flex pt-[18px] mt-12">
      <Link
        to="../installation"
        replace
        className="flex-1 flex-col items-center gap-1.5 flex"
      >
        <div
          className={`text-center text-sm font-extrabold leading-[18px] ${
            activeIndex === 0 ? "text-black" : "text-zinc-400"
          }`}
        >
          설치방법
        </div>
        {activeIndex === 0 ? (
          <div className="self-stretch h-0.5 bg-black" />
        ) : (
          <div className="self-stretch h-0.5 bg-zinc-100" />
        )}
      </Link>
      <Link
        to="../caution"
        replace
        className="flex-1 flex-col items-center gap-1.5 flex"
      >
        <div
          className={`text-center text-sm font-extrabold leading-[18px] ${
            activeIndex === 1 ? "text-black" : "text-zinc-400"
          }`}
        >
          주의사항
        </div>
        {activeIndex === 1 ? (
          <div className="self-stretch h-0.5 bg-black" />
        ) : (
          <div className="self-stretch h-0.5 bg-zinc-100" />
        )}
      </Link>
    </div>
  );
};

export default TabMenu;
