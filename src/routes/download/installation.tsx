import React from "react";
import InstallStep from "../../components/InstallStep";
import { PageDesc } from "../../components/PageDesc";
import TabMenu from "../../components/TabMenu";

export const Installation: React.FC = () => {
  return (
    <div className="flex flex-col gap-10">
      <TabMenu activeIndex={0} />
      <div className="flex flex-col gap-[40px] px-6">
        <div className="py-6 bg-green-50 rounded-[9.54px] flex-col justify-center items-center gap-5 inline-flex">
          <div className="text-center text-stone-900 text-base font-extrabold leading-tight">
            안심하고 다운로드하세요!
          </div>
          <img src="/images/download/installation/caution.png" />
          <div className="flex-col justify-start items-center gap-3.5 flex">
            <div className="text-center text-neutral-600 text-xs font-normal leading-4">
              민팃세이프는 휴대폰 감정, 데이터 삭제를 위한 권한을
              <br />
              포함하고 있어 위와 같은 팝업이 뜰 수 있습니다.
              <br />
              안심하고 허용하여 다운받아 주세요.
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[28px]">
          <div className="text-black text-xl font-extrabold leading-relaxed">
            민팃세이프 설치 방법
          </div>
          <InstallStep
            step={1}
            title={
              <div>
                <span className="text-zinc-800 text-base leading-tight">
                  민팃세이프 설치 후{" "}
                </span>
                <span className="text-zinc-800 text-base font-extrabold leading-tight">
                  설정&gt;일반&gt;VPN 및 기기관리
                </span>
                <span className="text-zinc-800 text-base leading-tight">
                  로 이동해 주세요
                </span>
              </div>
            }
            footerDescription={
              "‘VPN 및 기기관리’가 보이지 않을 경우\n[설정] > [일반] > [프로파일]을 선택해 주세요"
            }
          />
        </div>
        <div className="flex flex-col gap-[18px]">
          <InstallStep
            step={2}
            title={
              <div>
                <span className="text-zinc-800 text-base font-extrabold leading-tight">
                  Mintit Co.,Ltd.Profile
                </span>
                <span className="text-zinc-800 text-base leading-tight">
                  을 설치해 주세요
                </span>
              </div>
            }
            body={<img src="/images/download/installation/02.png" />}
          />
          <PageDesc
            icon={<img src="/icons/rotate.svg" className="w-6 h-6" />}
            content={
              <div>
                기존 다른 MDM을 사용하고 있을 경우 '프로파일 설치실패'가 뜰 수
                있습니다. 실패 시 VPN 및 기기 관리 내에서{" "}
                <u>기존 설치된 MDM 제거</u> 후 다시 시도해 주세요."
              </div>
            }
          />
        </div>
        <InstallStep
          step={3}
          title={
            <div>
              <span className="text-zinc-800 text-base leading-tight">
                원격 관리팝업에서{" "}
              </span>
              <span className="text-zinc-800 text-base font-extrabold leading-tight">
                ‘신뢰’
              </span>
              <span className="text-zinc-800 text-base leading-tight">
                를 선택해 주세요
              </span>
            </div>
          }
          body={<img src="/images/download/installation/03.png" />}
        />
        <InstallStep
          step={4}
          title={
            <div>
              <span className="text-zinc-800 text-base leading-tight">
                앱 설치 팝업이 뜨면{" "}
              </span>
              <span className="text-zinc-800 text-base font-extrabold leading-tight">
                ‘설치’
              </span>
              <span className="text-zinc-800 text-base leading-tight">
                를 선택해 주세요
              </span>
            </div>
          }
          body={<img src="/images/download/installation/04.png" />}
          footerDescription={"팝업이 뜨기까지 약 30초 ~ 2분 정도 소요돼요"}
        />
        <InstallStep
          step={5}
          title={
            <div>
              <span className="text-zinc-800 text-base font-extrabold leading-tight">
                홈 화면에 설치된 민팃세이프
              </span>
              <span className="text-zinc-800 text-base leading-tight">
                를 실행해 주세요
              </span>
            </div>
          }
          body={<img src="/images/download/installation/05.png" />}
          footerDescription={
            "민팃세이프를 실행하여 본인 인증 및 권한 동의와 안내에 따른 설정을 진행해 주세요"
          }
        />
      </div>
    </div>
  );
};
