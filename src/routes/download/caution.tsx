import { FC } from "react";
import InstallStep from "../../components/InstallStep";
import TabMenu from "../../components/TabMenu";

export const Caution: FC = () => {
  return (
    <>
      <TabMenu activeIndex={1} />
      <h2>iOS 도난당한 기기 보호 해제방법</h2>
      <InstallStep
        step={1}
        title="아이폰의 설정 > Face ID 및 암호 > 도난당한 기기보호 설정으로 이동해 주세요."
        imageSrc="/sample.png"
      />
      <InstallStep
        step={2}
        title="도난당한 기기보호 설정을 해제해 주세요"
        imageSrc="/sample.png"
      />
      <InstallStep
        step={3}
        title="도난당한 기기보호 안내 팝업에서 ‘보안 지연 시작’을 선택해 주세요."
        imageSrc="/sample.png"
      />
      <InstallStep
        step={4}
        title="도난당한 기기 보호가 해제될 때까지 1시간을 기다기신 후 민팃 세이브를 설치해 주세요."
        imageSrc="/sample.png"
        footerDescription="보안 지연 시작 1시간 후 곧바로 해제해 주세요.\n(일정 시간이 지나면 다시 1시간 대기 필요)"
      />
    </>
  );
};
