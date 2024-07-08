import React from "react";
import usePopupStore from "../stores/usePopupStore";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 p-6 text-sm">
      <div>
        <div className="flex justify-between items-center mb-4">
          <img src="logo.png" alt="MINTIT" className="h-8" />
          <div className="space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="flex justify-between mb-4">
          <a
            onClick={() => {
              usePopupStore.getState().openTerms();
            }}
            className="hover:underline"
          >
            이용약관
          </a>
          <a
            onClick={() => {
              usePopupStore.getState().openPrivacy();
            }}
            className="hover:underline"
          >
            개인정보 처리방침
          </a>
        </div>
        <div className="space-y-2">
          <p>평일 9:00-18:00, 점심 12:00-13:00, 주말 및 공휴일 휴무</p>
          <p>대표자: 하성문</p>
          <p>사업자번호: 137-81-49755</p>
          <p>통신판매번호: 제 2005-51호</p>
          <p>개인정보관리책임자: 성미라</p>
          <p>서울특별시 마포구 성암로 189 중소기업 DMC타워 16층</p>
        </div>
        <div className="mt-4 text-gray-500">
          © 2024 MINTIT. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
