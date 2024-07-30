import { FC, useEffect, useState } from "react";
import { Button } from "./Button";

type Props = {
  onAuth: (phoneNumber: string) => void;
};
const Auth: FC<Props> = ({ onAuth }) => {
  const [isInvalidPhoneNumber, setIsInvalidPhoneNumber] = useState(false);
  const [isPassPhoneNumber, setIsPassPhoneNumber] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("01086368010");
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsPassPhoneNumber(/^[0-9]{3}[0-9]{3,4}[0-9]{4}$/.test(phoneNumber));
  }, [phoneNumber]);

  return (
    <>
      <div className="pt-3 pb-10 flex-col gap-2 flex">
        <div className="text-black text-xl font-extrabold leading-relaxed">
          휴대폰 본인 인증
        </div>
        <div className="self-stretch text-zinc-600 text-sm leading-[18px]">
          본인 인증을 위해 휴대본 번호를 입력해 주세요
        </div>
      </div>
      <div className="flex-col gap-[60px] flex">
        <div className="h-[104px] flex-col gap-2 flex">
          <div className="h-20 flex-col gap-3 flex">
            <div className=" text-zinc-800 text-base font-bold leading-tight">
              휴대폰 번호
            </div>
            <div
              className={`h-12  bg-white rounded border ${
                isInvalidPhoneNumber && "border-red-600"
              } justify-start items-center gap-3 flex`}
            >
              <div className="flex-1 flex h-full">
                <input
                  className="flex px-4 w-full h-full text-zinc-800 text-sm items-center leading-[18px]"
                  placeholder="010-000-0000"
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.currentTarget.value);
                  }}
                  onBlur={() => {
                    setIsInvalidPhoneNumber(
                      !/^[0-9]{3}[0-9]{3,4}[0-9]{4}$/.test(phoneNumber)
                    );
                  }}
                />
              </div>
              <div className="w-6 h-6 relative">
                <div className="w-6 h-6 left-0 top-0 absolute">
                  <div className="w-[18px] h-[18px] left-[3px] top-[3px] absolute bg-zinc-400 rounded-full flex items-center justify-center">
                    x
                  </div>
                </div>
                <div className="w-2.5 h-2.5 left-[7px] top-[7px] absolute" />
              </div>
            </div>
          </div>
          {isInvalidPhoneNumber && (
            <div className="justify-start items-center gap-1 flex">
              <div className="w-3 h-3 relative">
                <div className="w-3 h-3 left-0 top-0 absolute bg-red-500 rounded-full" />
                <div className="w-[1.50px] h-[1.50px] left-[5.25px] top-[7.50px] absolute bg-white rounded-full" />
                <div className="w-[1.50px] h-[3.75px] left-[5.25px] top-[3px] absolute bg-white rounded-[64px]" />
              </div>
              <div className="w-[284px] text-red-500 text-xs">
                휴대폰 번호를 정확히 입력해주세요.
              </div>
            </div>
          )}
        </div>
        <div className="h-[266px] flex-col gap-5 flex">
          <div className="text-black text-lg font-extrabold leading-normal">
            개인정보 수집 및 활용 동의
          </div>
          <div className="h-[222px] flex-col gap-4 flex">
            <div className="h-[186px] px-4 py-5 bg-stone-50 rounded flex-col gap-3 flex">
              <div className="h-[58px] flex-col gap-2 flex">
                <div className="text-zinc-800 text-sm font-extrabold leading-[18px]">
                  개인정보 수집 및 활용 동의
                </div>
                <div className="flex text-zinc-800 text-xs">
                  귀하께서는 본 안내에 따른 개인정보 수집, 이용에 대하여 동의를
                  거부할 <br />
                  권리가 있습니다.
                </div>
              </div>
              <div className="h-[76px] flex-col gap-2 flex">
                <div className="text-zinc-800 text-xs font-bold">
                  [개인정보 수집 및 이용 동의]
                </div>
                <div className="h-[52px] flex-col gap-0.5 flex">
                  <div className="gap-0.5 flex">
                    <div className="w-4 h-4 relative">
                      <div className="w-4 h-4 left-0 top-0 absolute rounded-full" />
                      <div className="w-0.5 h-0.5 left-[7px] top-[7px] absolute bg-zinc-600 rounded-full" />
                    </div>
                    <div className="grow shrink basis-0 text-zinc-800 text-xs">
                      수집 항목 : 이름, 휴대폰번호, IMEI
                    </div>
                  </div>
                  <div className="gap-0.5 flex">
                    <div className="w-4 h-4 relative">
                      <div className="w-4 h-4 left-0 top-0 absolute rounded-full" />
                      <div className="w-0.5 h-0.5 left-[7px] top-[7px] absolute bg-zinc-600 rounded-full" />
                    </div>
                    <div className="grow shrink basis-0 text-zinc-800 text-xs">
                      수집 및 이용목적 : 데이터 삭제 인증서 발급
                    </div>
                  </div>
                  <div className="gap-0.5 flex">
                    <div className="w-4 h-4 relative">
                      <div className="w-4 h-4 left-0 top-0 absolute rounded-full" />
                      <div className="w-0.5 h-0.5 left-[7px] top-[7px] absolute bg-zinc-600 rounded-full" />
                    </div>
                    <div className="grow shrink basis-0 text-zinc-800 text-xs">
                      보유 기간 : 수집일로부터 1년
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="justify-start items-center gap-2 flex">
              <div className="w-5 h-5 relative">
                <input
                  type="checkbox"
                  className="border-teal-100"
                  checked={isChecked}
                  onChange={() => {
                    setIsChecked(!isChecked);
                  }}
                />
              </div>
              <div>
                <span className="text-zinc-800 text-sm font-extrabold leading-[18px]">
                  이용약관 전체 동의{" "}
                </span>
                <span className="text-red-500 text-sm font-extrabold leading-[18px]">
                  (필수)
                </span>
              </div>
            </div>
          </div>
        </div>
        <Button
          title="인증 요청 하기"
          isDisabled={!isChecked || !isPassPhoneNumber || isInvalidPhoneNumber}
          onClick={() => {
            onAuth(phoneNumber);
          }}
        />
      </div>
    </>
  );
};
export default Auth;
