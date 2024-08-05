import {
  APP_HEADER_HEIGHT,
  APP_TOP_MENU_HEIGHT,
} from "@components/ContentHeader";
import { useScreenSize } from "@hooks/useScreenSize";
import { FC } from "react";
import { Button } from "../components/Button";
import InstallStep from "../components/InstallStep";
import Layout from "../components/Layout";
import { PageDesc } from "../components/PageDesc";
import { PageTitle } from "../components/PageTitle";

export const Guide: FC = () => {
  const { isXL } = useScreenSize();

  return (
    <Layout
      className={`flex flex-col px-6`}
      style={{
        paddingTop: isXL ? APP_TOP_MENU_HEIGHT : APP_HEADER_HEIGHT,
      }}
    >
      <div className="flex flex-col gap-[12px]">
        <PageTitle
          icon={<img src="/images/guide/book.svg" />}
          title="민팃세이프 Guide"
        />
        <PageDesc
          icon={<img src="/icons/notification.svg" />}
          content={
            "민팃세이프를 이용하시기 전에\n한번 살펴 보시면 더욱 이용이 편리해져요"
          }
        />
      </div>
      <div className="text-black text-xl font-extrabold leading-relaxed mb-7 mt-10">
        민팃세이프 설치 안내
      </div>
      <div className="flex flex-col gap-10">
        <InstallStep
          step={1}
          title="민팃세이프 설치"
          body={<img src="/images/guide/01.png" className="w-full" />}
          footerDescription={
            "먼저 데이터를 삭제하려는 스마트폰에 민팃세이프 App을 설치 하셔야 해요"
          }
        />
        <InstallStep
          step={2}
          title="민팃세이프 실행"
          body={<img src="/images/guide/02.png" className="w-full" />}
          footerDescription={
            "민팃세이프 App을 설치 하셨다면 설치하신 App을 실행 해주세요"
          }
        />
        <InstallStep
          step={3}
          title="본인 인증"
          body={<img src="/images/guide/03.png" className="w-full" />}
          footerDescription={"지금 사용중이신 휴대폰으로 본인 인증을 진행해요"}
        />
        <InstallStep
          step={4}
          title="삭제 진행"
          body={<img src="/images/guide/04.png" className="w-full" />}
          footerDescription={
            "민팃세이프 App에서 단계별로 진행을 하시면 데이터 삭제가 진행되요"
          }
        />
        <InstallStep
          step={5}
          title="삭제 완료 & 인증서 획득"
          body={<img src="/images/guide/05.png" className="w-full" />}
          footerDescription={
            "민팃세이프 App에서 데이터 삭제가 완료되면 알림톡을 통해서 삭제 인증서가 발급되요"
          }
        />
        <InstallStep
          step={6}
          title="중고 단말기 판매"
          body={<img src="/images/guide/06.png" className="w-full" />}
          footerDescription={
            "데이터가 삭제되고 삭제 인증서까지 받으셨으면 민팃에서 중고폰으로 판매를 빠르게 하실수 있어요"
          }
        />
        <div className="flex flex-col gap-[24px] mt-[20px] mb-[60px]">
          <div className="text-center">
            <span className="text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
              아래 바로가기를 통해서{" "}
            </span>
            <span className="text-zinc-800 text-sm font-extrabold font-['SUIT'] leading-[18px]">
              중고폰을 판매
            </span>
            <span className="text-zinc-800 text-sm font-normal font-['SUIT'] leading-[18px]">
              {" "}
              해보세요
            </span>
          </div>
          <Button
            title="중고폰 판매하러 가기"
            onClick={() => {
              window.open("https://mintit.co.kr", "_blank");
            }}
          />
        </div>
      </div>
    </Layout>
  );
};
