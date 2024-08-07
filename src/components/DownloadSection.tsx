import React from "react";

const DownloadSection: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">민팃세이프 Download</h2>
      <p className="text-gray-700 mb-6">
        민팃 세이프는 휴대기기 성능진단과 데이터 삭제를 위한 프로그램으로
        앱스토어/마켓에 등록이 불가하여 별도로 설치가 꼭 필요해요
      </p>
      <div className="text-center mb-6">
        <img src="path/to/logo.png" alt="민팃세이프" className="mx-auto mb-2" />
        <p className="text-lg font-medium">민팃 세이프</p>
      </div>
      <h3 className="text-lg font-semibold mb-2">
        삭제할 중고폰에 설치해주세요!
      </h3>
      <p className="text-gray-700 mb-6">
        아래의 다운로드 버튼을 누르면 민팃 세이프를 설치할 수 있어요
      </p>
      <div className="text-center">
        <a
          href={import.meta.env.VITE_IOS_DOWNLOAD_URL}
          className="bg-blue-500 text-white py-2 px-4 rounded-full inline-flex items-center"
        >
          <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21 10h-6V4h-2v6H3v2h10v6h2v-6h6z" />
          </svg>
          iOS 버전 다운로드
        </a>
      </div>
    </div>
  );
};

export default DownloadSection;
