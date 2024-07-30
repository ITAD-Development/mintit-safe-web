import { FC } from "react";
import { DotLoader } from "react-spinners";

type Props = {
  onCancel: () => void;
  onConfirm: () => void;
};
const Loading: FC<Props> = ({ onCancel, onConfirm }) => {
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
        <DotLoader size={50} color="#A0F0E0" />
      </div>
      <div className="flex gap-3">
        <div
          className="flex-1 h-12 px-12 py-[15px] bg-zinc-100 rounded justify-center items-center flex"
          onClick={onCancel}
        >
          <div className="text-zinc-800 text-sm font-extrabold leading-[18px]">
            취소
          </div>
        </div>
        <div
          className="flex-1 h-12 px-12 py-[15px] bg-teal-200 rounded justify-center items-center flex"
          onClick={onConfirm}
        >
          <div className="text-zinc-800 text-sm font-extrabold leading-[18px]">
            인증 확인 하기
          </div>
        </div>
      </div>
    </>
  );
};
export default Loading;
