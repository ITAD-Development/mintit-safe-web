import React from "react";
import { Button } from "../../components/Button";
import InstallStep from "../../components/InstallStep";

export const Aos: React.FC = () => {
  return (
    <>
      <Button title="Android 버전 다운로드" />
      <h3>민팃 세이프 설치 방법</h3>
      <InstallStep
        step={1}
        title="민팃 세이프 다운로드 완료 후, ‘열기’를 통해 설치를 진행해 주세요."
        imageSrc="/sample.png"
        footerDescription="다운로드된 설치파일은 [내 파일] > [APK 설치파일]에서 확인가능해요"
      />
      <InstallStep
        step={2}
        title="설치를 진행하면, 주의 안내 팝업이 나와요\n안심하고 ‘무시하고 설치’를 눌러 진행해 주세요"
        imageSrc="/sample.png"
      />
      <InstallStep
        step={3}
        title="민팃 세이프 설치 완료까지 1분 정도 시간이 필요해요"
        imageSrc="/sample.png"
      />
      <InstallStep
        step={4}
        title="홈 화면에 설치된 민팃 세이프를 실행해 주세요"
        imageSrc="/sample.png"
      />
    </>
  );
};
