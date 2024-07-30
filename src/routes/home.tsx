import React from "react";
import { Button } from "../components/Button";
import Carousel from "../components/Carousel";
import Layout from "../components/Layout";

export const Home: React.FC = () => {
  return (
    <Layout className="flex flex-col px-6 pt-[140px]">
      <img
        src="/images/home-bg.svg"
        className="w-[105px] h-[91px] absolute top-[15px] right-[-7px]"
      />
      <div className="flex-col justify-start items-start gap-5 inline-flex ">
        <div className="px-3 py-1 bg-teal-400 rounded-3xl justify-center items-center gap-2.5 inline-flex">
          <div className="text-white text-sm font-bold leading-[18px]">
            데이터 삭제, 안전, 효율성
          </div>
        </div>
        <div className="self-stretch px-3 justify-center items-center gap-2.5 inline-flex mb-[38px]">
          <div className="grow shrink basis-0">
            <span className="text-cyan-500 text-[22px] font-bold leading-7">
              민팃세이프
            </span>
            <span className="text-black text-[22px] font-normal leading-7">
              에서는 <br />
              고객님들의 스마트폰이
              <br />
            </span>
            <span className="text-teal-400 text-[22px] font-bold leading-7">
              안전하고 빠르게 초기화
            </span>
            <span className="text-black text-[22px] font-bold leading-7">
              {" "}
            </span>
            <span className="text-black text-[22px] font-normal leading-7">
              될 수<br />
              있도록 서비스를 제공하고 있습니다.
            </span>
          </div>
        </div>
      </div>
      <Carousel />
      <div className="flex flex-col mb-[40px]">
        <div className="mb-[16px]">
          <span className="text-zinc-800 text-lg font-bold leading-normal">
            초기화 할 중고폰에
          </span>
          <br />
          <span className="text-zinc-800 text-lg font-extrabold leading-normal">
            민팃세이프를 설치
          </span>
          <span className="text-zinc-800 text-lg font-bold leading-normal">
            {" "}
            해보세요.
          </span>
        </div>
        <div className="mb-[28px]">
          <span className="text-zinc-600 text-sm font-normal leading-[18px]">
            아래의
          </span>
          <span className="text-zinc-600 text-sm font-bold leading-[18px]">
            {" "}
            다운로드 버튼을 누르면{" "}
          </span>
          <span className="text-zinc-600 text-sm font-normal leading-[18px]">
            ’민팃세이프’를 설치할 수 있어요
          </span>
        </div>
        <Button title="다운로드" />
      </div>

      <div className="flex flex-col mb-[100px]">
        <div className="mb-[16px]">
          <span className="text-zinc-800 text-lg font-bold leading-normal">
            데이터 삭제를 마치셨다면 <br />
          </span>
          <span className="text-zinc-800 text-lg font-extrabold leading-normal">
            중고폰을 판매
          </span>
          <span className="text-zinc-800 text-lg font-bold leading-normal">
            해 보세요.
          </span>
        </div>
        <div className="mb-[28px]">
          <span className="text-zinc-600 text-sm font-normal leading-[18px]">
            아래의{" "}
          </span>
          <span className="text-zinc-600 text-sm font-bold leading-[18px]">
            민팃 바로가기 버튼
          </span>
          <span className="text-zinc-600 text-sm font-normal leading-[18px]">
            을 누르고 판매방법을 확인해 보아요
          </span>
        </div>
        <Button title="민팃 바로가기" />
      </div>
    </Layout>
  );
};
