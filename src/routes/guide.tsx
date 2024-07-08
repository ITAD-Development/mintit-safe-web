import { FC } from "react";
import InstallStep from "../components/InstallStep";
import Layout from "../components/Layout";
import { PageDesc } from "../components/PageDesc";
import { PageTitle } from "../components/PageTitle";

export const Guide: FC = () => {
  return (
    <Layout className="flex flex-col gap-10">
      <div>
        <PageTitle title="MINTIT safe Guide" />
        <PageDesc
          content={
            "Mintit safe를 이용하시기 전에\n한번 살펴 보시면 더욱 이용이 편리해져요"
          }
        />
      </div>
      <InstallStep
        step={1}
        title="MINTIT safe 설치"
        imageSrc="/sample.png"
        headerDescription={
          "먼저 데이터를 삭제하려는 스마트폰에\nMINTIT safe App을 설치 하셔야 해요"
        }
      />
      <InstallStep
        step={2}
        title="MINTIT safe 실행"
        imageSrc="/sample.png"
        headerDescription={
          "MINTIT safe App을 설치 하셨다면\n설치하신 App을 실행 해주세요"
        }
      />
      <InstallStep
        step={3}
        title="본인 인증"
        imageSrc="/sample.png"
        headerDescription={"지금 사용중이신 휴대폰으로\n본인 인증을 진행해요"}
      />
      <InstallStep
        step={4}
        title="삭제 진행"
        imageSrc="/sample.png"
        headerDescription={
          "MINTIT safe App에서 단계별로 진행을 하시면\n데이터 삭제가 진행되요"
        }
      />
      <InstallStep
        step={5}
        title="삭제 완료 & 인증서 획득"
        imageSrc="/sample.png"
        headerDescription={
          "MINTIT safe App에서 데이터 삭제가 완료되면\n알림톡을 통해서 삭제 인증서가 발급되요"
        }
      />
      <InstallStep
        step={6}
        title="중고 단말기 판매"
        imageSrc="/sample.png"
        headerDescription={
          "데이터가 삭제되고 삭제 인증서까지 받으셨으면\n민팃에서 중고폰으로 판매를 빠르게 하실수 있어요"
        }
        footerDescription={"아래 바로가기를 통해서 중고폰을 판매 해보세요"}
      />
    </Layout>
  );
};
