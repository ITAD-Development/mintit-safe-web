import React from "react";
import { Button } from "../components/Button";
import Carousel from "../components/Carousel";
import Layout from "../components/Layout";

export const Home: React.FC = () => {
  return (
    <Layout className="flex flex-col gap-10">
      <div>
        <h2 className="text-2xl font-bold mb-4">데이터 삭제, 안전, 효율성</h2>

        <p className="text-gray-700">
          MINTIT safe에서는 고객님들의 스마트폰의 안전하고 빠르게 초기화 할 수
          있도록 서비스를 제공하고 있습니다.
        </p>
      </div>
      <Carousel />
      <div className="flex flex-col gap-2">
        <p>
          초기화 할 중고폰에 민팃
          <br />
          세이프를 설치 해보세요.
        </p>
        <Button title="Download" />
      </div>

      <div className="flex flex-col gap-2">
        <p>
          데이터 삭제를 마치셨다면
          <br />
          중고폰을 판매하러 GO~! GO~!
        </p>
        <Button title="Download" />
      </div>
    </Layout>
  );
};
