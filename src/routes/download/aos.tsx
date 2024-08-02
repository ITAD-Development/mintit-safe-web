import React from "react";
import { Button } from "../../components/Button";
import InstallStep from "../../components/InstallStep";

export const Aos: React.FC = () => {
  return (
    <div className="flex flex-col px-6">
      <Button
        icon={<img src="/images/download/aos-download.svg" />}
        title="Android 버전 다운로드"
        onClick={() => {
          // console.log(import.meta.env.VITE_ANDROID_DOWNLOAD_URL);
          location.href = import.meta.env.VITE_ANDROID_DOWNLOAD_URL;
        }}
      />
      <div className="flex flex-col gap-10 mt-[60px]">
        <div className="flex flex-col gap-[40px]">
          <div className="px-6 py-6 bg-green-50 rounded-[9.54px] flex-col justify-center items-center gap-5 inline-flex">
            <div className="text-center text-stone-900 text-base font-extrabold leading-tight">
              안심하고 다운로드하세요!
            </div>
            <img src="/images/download/aos/caution.png" />
            <div className="flex-col justify-start items-center gap-3.5 flex">
              <div className="text-center text-neutral-600 text-xs leading-4">
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
                <div className="w-[264px]">
                  <span className="text-zinc-800 text-base leading-tight">
                    민팃세이프 다운로드 완료 후, <br />
                  </span>
                  <span className="text-zinc-800 text-base font-extrabold leading-tight">
                    ‘열기'를 통해 설치를 진행
                  </span>
                  <span className="text-zinc-800 text-base leading-tight">
                    해 주세요
                  </span>
                </div>
              }
              body={
                <img
                  style={{ width: "100%" }}
                  src="/images/download/aos/01.png"
                />
              }
              footerDescription={
                "다운로드된 설치파일은  [내 파일] > [APK 설치파일]에서 확인 가능해요"
              }
            />
          </div>
          <InstallStep
            step={2}
            title={
              <div>
                <span className="text-zinc-800 text-base leading-tight">
                  설치를 진행하면, 주의 안내 팝업이 나와요
                  <br />
                  안심하고,{" "}
                </span>
                <span className="text-zinc-800 text-base font-extrabold leading-tight">
                  ‘무시하고 설치'를 눌러 진행
                </span>
                <span className="text-zinc-800 text-base leading-tight">
                  해 주세요
                </span>
              </div>
            }
            body={
              <img
                style={{ width: "100%" }}
                src="/images/download/aos/02.png"
              />
            }
          />
          <InstallStep
            step={3}
            title={
              <div>
                <span className="text-zinc-800 text-base leading-tight">
                  민팃세이프 설치 완료까지{" "}
                </span>
                <span className="text-zinc-800 text-base font-extrabold leading-tight">
                  1분 정도 시간
                </span>
                <span className="text-zinc-800 text-base leading-tight">
                  이 필요해요
                </span>
              </div>
            }
            body={
              <img
                style={{ width: "100%" }}
                src="/images/download/aos/03.png"
              />
            }
          />
          <InstallStep
            step={4}
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
            body={
              <img
                style={{ width: "100%" }}
                src="/images/download/aos/04.png"
              />
            }
            footerDescription={
              "민팃세이프를 실행하여 본인 인증 및 권한 동의와 안내에 따른 설정을 진행해 주세요"
            }
          />
        </div>
      </div>
    </div>
  );
};
