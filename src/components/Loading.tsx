const Loading = () => {
  return (
    <>
      <div className="pt-3 pb-10 flex-col gap-2 flex">
        <div className="text-black text-xl font-extrabold leading-relaxed">
          휴대폰 본인 인증
        </div>
        <div className="self-stretch text-zinc-600 text-sm leading-[18px]">
          카카오톡 알림톡 또는 문자를 확인하여
          <br />
          본인 인증을 진행해주세요.
        </div>
      </div>
      <div className="h-[310px] pt-10 pb-5 flex-col justify-center items-center gap-7 flex">
        <div className="w-12 h-12 relative">
          <div className="w-1.5 h-1.5 left-[21px] top-[5px] absolute bg-neutral-100 rounded-full" />
          <div className="w-1.5 h-1.5 left-[21px] top-[37px] absolute bg-teal-200 rounded-full" />
          <div className="w-1.5 h-1.5 left-[43px] top-[21px] absolute origin-top-left rotate-90 bg-teal-100 rounded-full" />
          <div className="w-1.5 h-1.5 left-[11px] top-[21px] absolute origin-top-left rotate-90 bg-teal-300 rounded-full" />
          <div className="w-1.5 h-1.5 left-[39.55px] top-[35.31px] absolute origin-top-left rotate-[135deg] bg-teal-200 rounded-full" />
          <div className="w-1.5 h-1.5 left-[16.93px] top-[12.69px] absolute origin-top-left rotate-[135deg] bg-teal-300 rounded-full" />
          <div className="w-1.5 h-1.5 left-[35.31px] top-[8.44px] absolute origin-top-left rotate-45 bg-zinc-100 rounded-full" />
          <div className="w-1.5 h-1.5 left-[12.69px] top-[31.07px] absolute origin-top-left rotate-45 bg-teal-300 rounded-full" />
        </div>
      </div>
      <div className="flex gap-3">
        <div className="flex-1 h-12 px-12 py-[15px] bg-zinc-100 rounded justify-center items-center flex">
          <div className="text-zinc-800 text-sm font-extrabold leading-[18px]">
            취소
          </div>
        </div>
        <div className="flex-1 h-12 px-12 py-[15px] bg-teal-200 rounded justify-center items-center flex">
          <div className="text-zinc-800 text-sm font-extrabold leading-[18px]">
            인증 확인 하기
          </div>
        </div>
      </div>
    </>
  );
};
export default Loading;
