import {
  APP_HEADER_HEIGHT,
  APP_TOP_MENU_HEIGHT,
} from "@components/ContentHeader";
import { useScreenSize } from "@hooks/useScreenSize";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import Carousel from "../components/Carousel";
import Layout from "../components/Layout";

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const isXL = useScreenSize();

  return (
    <Layout
      className={`flex flex-col px-6 relative`}
      style={{
        paddingTop: isXL ? APP_TOP_MENU_HEIGHT + 40 : APP_HEADER_HEIGHT + 40,
      }}
    >
      <div className="relative top-0 z-10">
        <div className="flex-col justify-start items-start gap-5 inline-flex ">
          <div
            className="px-3 py-1  rounded-3xl justify-center items-center gap-2.5 inline-flex"
            style={{
              backgroundColor: "#3ECCB2",
            }}
          >
            <div className="text-white text-sm font-bold leading-4.5">
              데이터 삭제, 안전, 효율성
            </div>
          </div>
          <div className="self-stretch px-3 justify-center items-center gap-2.5 inline-flex mb-[38px]">
            <div className="grow shrink basis-0">
              <span
                className="text-[21px] font-bold leading-7"
                style={{
                  color: "#05977D",
                }}
              >
                민팃세이프
              </span>
              <span className="text-black text-[21px] font-normal leading-7">
                에서는 <br />
                고객님들의 스마트폰이
                <br />
              </span>
              <span
                className="text-[21px] font-bold leading-7"
                style={{
                  color: "#05977D",
                }}
              >
                안전하고 빠르게 초기화
              </span>
              <span className="text-black text-[21px] font-bold leading-7">
                {" "}
              </span>
              <span className="text-black text-[21px] font-normal leading-7">
                될 수<br />
                있도록 서비스를 제공하고 있습니다.
              </span>
            </div>
          </div>
        </div>
        <Carousel />
        <div className="flex flex-col mb-[40px]">
          <div className="mb-3 relative">
            <div className="relative">
              <span className="text-zinc-800 text-lg font-bold leading-normal">
                초기화 할 중고폰에
              </span>
              <br />
              <span className="text-zinc-800 text-lg font-extrabold leading-normal">
                민팃세이프를 설치해
              </span>
              <span className="text-zinc-800 text-lg font-bold leading-normal">
                {" "}
                보세요.
              </span>
            </div>
            <div
              style={{
                backgroundColor: "#73EED8",
                width: 150,
                height: 8,
                position: "absolute",
                left: -3,
                bottom: 2,
                zIndex: -1,
              }}
            />
          </div>
          <div className="mb-7">
            <span className="text-zinc-600 text-sm font-normal leading-4.5">
              아래의
            </span>
            <span className="text-zinc-600 text-sm font-bold leading-4.5">
              {" "}
              다운로드 버튼을 누르면{" "}
            </span>
            <span className="text-zinc-600 text-sm font-normal leading-4.5">
              ’민팃세이프’를 설치할 수 있어요
            </span>
          </div>
          <Button
            title="다운로드"
            onClick={() => {
              navigate("/download");
            }}
          />
        </div>

        <div className="flex flex-col mb-[100px]">
          <div className="mb-3 relative">
            <div className="relative">
              <span className="text-zinc-800 text-lg font-bold leading-normal">
                데이터 삭제를 마치셨다면 <br />
              </span>
              <span className="text-zinc-800 text-lg font-extrabold leading-normal">
                중고폰을 판매해{" "}
              </span>
              <span className="text-zinc-800 text-lg font-bold leading-normal">
                보세요.
              </span>
            </div>
            <div
              style={{
                backgroundColor: "#73EED8",
                width: 120,
                height: 8,
                position: "absolute",
                left: -3,
                bottom: 2,
                zIndex: -1,
              }}
            />
          </div>
          <div className="mb-7">
            <span className="text-zinc-600 text-sm font-normal leading-4.5">
              아래의{" "}
            </span>
            <span className="text-zinc-600 text-sm font-bold leading-4.5">
              민팃 바로가기 버튼
            </span>
            <span className="text-zinc-600 text-sm font-normal leading-4.5">
              을 누르고 판매방법을 확인해 보아요
            </span>
          </div>
          <Button
            title="민팃 바로가기"
            onClick={() => {
              window.open(
                "https://www.mintit.co.kr/",
                "_blank",
                "noopener,noreferrer"
              );
            }}
          />
        </div>
      </div>
      <div
        className="absolute right-0 z-1"
        style={{
          top: APP_HEADER_HEIGHT + 15,
        }}
      >
        <img src="/images/home/home-bg-01.svg" />
      </div>
      <div className="absolute bottom-0 right-0 z-1">
        <img src="/images/home/home-bg-03.svg" />
      </div>
      <div className="absolute bottom-[117px] left-0 z-2">
        <img src="/images/home/home-bg-02.svg" />
      </div>
    </Layout>
  );
};
