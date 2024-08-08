import { useScreenSize } from "@hooks/useScreenSize";
import React from "react";
import usePopupStore from "../stores/usePopupStore";

const Footer: React.FC = () => {
  const { isUnder360 } = useScreenSize();
  return (
    <footer className="w-full px-6 py-10 bg-neutral-100">
      <div className="flex justify-between items-center mb-[22px]">
        <img src="/logo.svg" />
        <div className="flex gap-[10px]">
          <a
            href="https://www.youtube.com/channel/UC5bT0Fy-Ui6jJLPvw0P051g"
            target="_blank"
          >
            <img src="/youtube.svg" />
          </a>
          <a href="https://www.instagram.com/mintit_official/" target="_blank">
            <img src="/instagram.svg" />
          </a>
        </div>
      </div>
      <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
        <div className="self-stretch flex-col justify-start items-start gap-[22px] flex">
          <div className="justify-start items-center gap-2 inline-flex">
            <div
              className="text-zinc-800 text-sm  leading-[18px] cursor-pointer"
              onClick={() => {
                usePopupStore.getState().openTerms();
              }}
            >
              이용약관
            </div>
            <div className="w-px h-2.5 bg-neutral-300" />
            <div
              className="text-zinc-800 text-sm font-bold leading-[18px] cursor-pointer"
              onClick={() => {
                usePopupStore.getState().openPrivacy();
              }}
            >
              개인정보처리방침
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-2 flex">
            <div className="text-zinc-600 text-xs font-normal leading-[18px]">
              평일 9:00-18:00, 점심 12:00-13:00,{isUnder360 && <br />} 주말 및
              공휴일 휴무
            </div>
          </div>
        </div>
        <div className="text-zinc-600 text-sm font-normal leading-normal">
          대표자 : 하성문
          <br />
          사업자번호 : 137-81-49755
          <br />
          통신판매번호 : 제 2005-51호
          <br />
          개인정보관리책임자 : 성미라
          <br />
          서울특별시 마포구 성암로 189 중소기업 DMC타워 16층
        </div>
        <div className="text-zinc-500 text-xs font-normal leading-none">
          ⓒ 2024 MINTIT. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
