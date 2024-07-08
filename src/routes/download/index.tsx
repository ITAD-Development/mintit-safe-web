import React from "react";
import { Outlet } from "react-router-dom";
import Layout from "../../components/Layout";
import { PageDesc } from "../../components/PageDesc";
import { PageTitle } from "../../components/PageTitle";

export const Download: React.FC = () => {
  return (
    <Layout className="flex flex-col gap-10">
      <div>
        <PageTitle title="MINTIT safe Download" />
        <PageDesc
          content={
            "민팃 세이프는 휴대기기 성능진단과 데이터\n삭제를 위한 프로그램으로 앱스토어/마켓에\n등록이 불가하여 별도로 설치가 꼭 필요해요"
          }
        />
      </div>
      <h2 className="text-xl">삭제할 중고폰에 설치해주세요!</h2>
      <p>아래의 다운로드 버튼을 누르면 민팃 세이프를 설치할 수 있어요</p>
      <Outlet />
    </Layout>
  );
};
