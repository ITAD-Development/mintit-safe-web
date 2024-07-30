import React from "react";
import { Outlet } from "react-router-dom";
import Layout from "../../components/Layout";
import { PageDesc } from "../../components/PageDesc";
import { PageTitle } from "../../components/PageTitle";

export const Download: React.FC = () => {
  return (
    <Layout className="flex flex-col mb-12 pt-[140px]">
      <div className="flex flex-col gap-[12px] px-6">
        <PageTitle
          icon={<img src="/images/download/download.svg" />}
          title="민팃세이프 Download"
        />
        <PageDesc
          icon={<img src="/icons/notification.svg" />}
          content={
            "민팃세이프는 휴대기기 성능진단과 데이터 삭제를 위한 프로그램으로 앱스토어/마켓에 등록이 불가하여 별도로 설치가 꼭 필요해요"
          }
        />
      </div>

      <div className="flex flex-col items-center mt-[40px] mb-[40px] px-6 ">
        <img
          src="/images/download/download-mintit-safe.png"
          className="w-20 mb-[60px]"
        />
        <div className="text-zinc-800 text-sm font-extrabold leading-[18px] mb-4">
          삭제할 중고폰에 설치해 주세요!
        </div>
        <div className="">
          <span className="text-zinc-500 text-sm font-normal font-['SUIT'] leading-[18px]">
            아래의
          </span>
          <span className="text-zinc-500 text-sm font-extrabold font-['SUIT'] leading-[18px]">
            {" "}
            다운로드 버튼을 누르면 <br />
          </span>
          <span className="text-zinc-500 text-sm font-normal font-['SUIT'] leading-[18px]">
            ’민팃세이프’를 설치할 수 있어요
          </span>
        </div>
      </div>
      <Outlet />
    </Layout>
  );
};
