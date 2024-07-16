import React from "react";
import Layout from "../components/Layout";

export const Success: React.FC = () => {
  return (
    <Layout className="flex flex-col px-6 pb-[60px]">
      성공: 진행 중인 곳으로 돌아가서 인증 확인을 눌러 주세요.
    </Layout>
  );
};
