import React from "react";
import InstallStep from "./InstallStep";

const InstallationGuide: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">설치 방법</h2>

      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">안심하고 다운로드 하세요</h3>

        <p className="text-gray-700">
          민팃 세이프는 데이터 삭제를 위한 권한을 포함하고 있어 위와 같은 팝업이
          뜰 수 있습니다. 안심하고 허용하여 다운로드 해 주세요.
        </p>
      </div>

      <h2 className="text-2xl font-bold mb-4">민팃 세이프 설치 방법</h2>

      <InstallStep step={1} imageSrc="" />
    </div>
  );
};

export default InstallationGuide;
