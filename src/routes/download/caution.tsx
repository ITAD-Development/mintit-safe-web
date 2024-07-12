import React from "react";
import InstallStep from "../../components/InstallStep";
import { PageDesc } from "../../components/PageDesc";
import TabMenu from "../../components/TabMenu";

export const Caution: React.FC = () => {
  return (
    <div className="flex flex-col gap-10">
      <TabMenu activeIndex={1} />
      <div className="flex flex-col gap-[40px] px-6">
        <div className="bg-green-50 rounded-[9.54px] flex-col justify-center items-center gap-5 inline-flex p-5">
          <div className="text-center text-stone-900 text-base font-extrabold leading-tight">
            확인해주세요!
          </div>
          <img src="/images/download/caution/caution.png" />
          <div className="flex-col justify-start items-center gap-3.5 flex">
            <div className="text-center text-neutral-600 text-xs leading-4">
              iOS 17.3 업데이트 이후로 도난당한 기기 보호 기능이 <br />
              설정되어있는 경우에는 ‘민팃 커넥터’ 설치가 불가능합니다. <br />꼭
              설정을 해재해 주세요.
            </div>
          </div>
        </div>
        <div className="text-black text-xl font-extrabold leading-relaxed">
          iOS 도난당한 기기 보호 해제방법
        </div>
        <InstallStep
          step={1}
          title={
            <div>
              <span className="text-zinc-800 text-base leading-tight">
                아이폰의{" "}
              </span>
              <span className="text-zinc-800 text-base font-extrabold leading-tight">
                설정 &gt; Face ID 및 암호 &gt; <br />
                도난당한 기기보호 설정
              </span>
              <span className="text-zinc-800 text-base leading-tight">
                으로 이동해 주세요
              </span>
            </div>
          }
          body={<img src="/images/download/caution/01.png" />}
        />
        <InstallStep
          step={2}
          title={
            <div>
              <span className="text-zinc-800 text-base font-extrabold leading-tight">
                도난당한 기기보호 설정
              </span>
              <span className="text-zinc-800 text-base leading-tight">
                을 해제해 주세요
              </span>
            </div>
          }
          body={<img src="/images/download/caution/02.png" />}
        />
        <InstallStep
          step={3}
          title={
            <div>
              <span className="text-zinc-800 text-base font-extrabold leading-tight">
                도난당한 기기보호 안내 팝업
              </span>
              <span className="text-zinc-800 text-base leading-tight">
                에서 ‘보안 <br />
                지연 시작’을 선택해 주세요.
              </span>
            </div>
          }
          body={<img src="/images/download/caution/03.png" />}
        />
        <div className="flex flex-col gap-4">
          <InstallStep
            step={4}
            title={
              <div>
                <span className="text-zinc-800 text-base font-extrabold leading-tight">
                  도난당한 기기 보호
                </span>
                <span className="text-zinc-800 text-base leading-tight">
                  가 해제될 때까지 1시간을 기다리신 후 민팃세이프를 설치
                  해주세요
                </span>
              </div>
            }
            body={<img src="/images/download/caution/04.png" />}
          />
          <PageDesc
            icon={<img src="/icons/rotate.svg" className="w-6 h-6" />}
            content={
              <div>
                <span className="text-black text-xs leading-none">
                  보안 지연 시작 1시간 후 곧바로 해제해 주세요.
                  <br />
                </span>
                <span className="text-black text-xs font-bold leading-none">
                  (일정 시간이 지나면 다시 1시간 대기 필요)
                </span>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};
