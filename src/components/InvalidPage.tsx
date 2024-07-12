import React from "react";

export const InvalidPage: React.FC = () => {
  return (
    <>
      <div className="h-[198px] flex-col justify-start items-center gap-6 flex">
        <div className="flex-col justify-start items-center gap-6 flex">
          <div className="w-12 h-12 relative">
            <div className="w-12 h-12 left-0 top-0 absolute bg-teal-200 rounded-full" />
            <div className="w-1.5 h-6 left-[21px] top-[12px] absolute">
              <div className="w-1.5 h-[5px] left-0 top-[19px] absolute bg-black rounded-full" />
              <div className="w-1.5 h-4 left-0 top-0 absolute bg-black rounded-[64px]" />
            </div>
          </div>
          <div className="flex-col justify-start items-center gap-3 flex">
            <div className="text-center text-stone-900 text-lg font-extrabold leading-normal">
              유효하지 않은 페이지 입니다.
            </div>
            <div className="text-center text-stone-900 text-sm leading-[18px]">
              휴대폰 본인 인증을 다시 진행해주세요.
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-center gap-3 flex">
          <div className="px-5 py-[15px] bg-teal-200 rounded justify-center items-center flex">
            <div className="text-zinc-800 text-sm font-extrabold leading-[18px]">
              휴대폰 본인 인증
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
