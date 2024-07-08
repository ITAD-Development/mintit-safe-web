import React from "react";
import InstallStep from "../../components/InstallStep";
import TabMenu from "../../components/TabMenu";

export const Installation: React.FC = () => {
  return (
    <>
      <TabMenu activeIndex={0} />
      <h2>민팃 세이프 설치 방법</h2>
      <InstallStep
        step={1}
        title="민팃 세이프 설치 후  설정>일반>VPN 및 기기 관리로 이동해주세요"
        imageSrc="/sample.png"
        headerDescription="VPN 및 기기 관리가 보이지 않을 경우 [설정]>[일반]>[프로파일]을 선택해 주세요"
      />
      <InstallStep
        step={2}
        title="Mintit Co.,Ltd.Profile을 설치해 주세요."
        imageSrc="/sample.png"
        footerDescription="기존 다른 MDM을 사용하고 있을 경우 '프로파일 설치 실패'가 뜰 수 있습니다. 실패 시 VPN 및 기기 관리 내에서 기존 설치된 MDM 제거 후 다시 시도해 주세요."
      />
      <InstallStep
        step={3}
        title="원격 관리팝업에서 ‘신뢰’를 선택해 주세요"
        imageSrc="/sample.png"
      />
      <InstallStep
        step={4}
        title="앱 설치 팝업이 뜨면 ‘설치’를 선택해 주세요"
        imageSrc="/sample.png"
      />{" "}
      <InstallStep
        step={5}
        title="홈 화면에 설치된 민팃 세이프를 실행해 주세요"
        imageSrc="/sample.png"
      />
    </>
  );
};
