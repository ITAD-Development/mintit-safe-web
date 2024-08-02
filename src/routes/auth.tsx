import React from "react";

export const Auth: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="h-[60px] pl-6 py-[11px] items-center inline-flex">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="38"
            viewBox="0 0 100 38"
            fill="none"
          >
            <path
              d="M25.3719 27.3676C27.6226 25.7032 26.3969 23.3718 24.2855 23.9031C22.5109 24.3511 22.1742 27.1289 22.1742 28.6462C22.1742 29.2364 21.5406 29.2037 21.5406 29.2037H20.4957C19.4939 29.2037 18.5933 28.6037 18.2251 27.6832C17.2433 25.2275 16.2315 22.5298 15.7406 21.4801C14.7703 28.3699 12.6175 30.8746 7.81765 30.8746C5.48405 30.8746 3.82217 30.013 2.89337 28.6887C2.37092 27.9431 2.38087 27.2663 2.38087 27.2663C2.38087 25.9959 3.42743 25.0051 4.71613 24.9659C5.34141 24.9463 5.78425 25.1457 6.41948 25.7032C6.41948 25.7032 6.97178 26.2117 7.7314 26.1578C9.92568 26.0024 10.5277 21.1074 11.571 14.7408C11.7418 13.6944 12.46 12.5156 14.1981 12.5156C15.2629 12.5156 15.9828 12.9374 16.5052 13.7991L20.8108 21.0452L25.1413 13.7435C25.6107 12.9685 26.3637 12.5205 27.4252 12.5205C28.8333 12.5205 29.9744 13.5162 29.9744 14.7457V26.9801C29.9744 28.2096 28.8333 29.2053 27.4252 29.2053H23.4513C23.4513 29.2053 22.7132 29.1563 23.6403 28.5595L25.3719 27.3676Z"
              fill="#53D9C1"
            />
            <path
              d="M34.9944 29.1988C33.5431 29.1988 32.3672 28.0396 32.3672 26.609V15.1038C32.3672 13.6732 33.5431 12.5156 34.9944 12.5156C36.4456 12.5156 37.6215 13.6748 37.6215 15.1038V26.6106C37.6215 28.0396 36.4456 29.1988 34.9944 29.1988Z"
              fill="#53D9C1"
            />
            <path
              d="M76.4514 29.1988C75.0001 29.1988 73.8242 28.0396 73.8242 26.609V15.1038C73.8242 13.6732 75.0001 12.5156 76.4514 12.5156C77.9026 12.5156 79.0786 13.6748 79.0786 15.1038V26.6106C79.0786 28.0396 77.9026 29.1988 76.4514 29.1988Z"
              fill="#53D9C1"
            />
            <path
              d="M70.1405 12.5156H59.4245C58.0844 12.5156 56.998 13.5865 56.998 14.9076C56.998 16.2286 58.0844 17.2995 59.4245 17.2995H62.1562V26.6139C62.1562 28.0445 63.3321 29.2037 64.7834 29.2037C66.2346 29.2037 67.4105 28.0445 67.4105 26.6139V17.2979H70.1422C71.4823 17.2979 72.5687 16.227 72.5687 14.9059C72.567 13.5865 71.4806 12.5156 70.1405 12.5156Z"
              fill="#53D9C1"
            />
            <path
              d="M48.1903 27.6603C48.3362 28.5873 48.9101 29.2021 49.7742 29.2021C49.7742 29.2021 52.9537 29.1939 52.9454 29.2021C54.3966 29.2021 55.5726 28.0429 55.5726 26.6123V15.1054C55.5726 13.6748 54.3966 12.5156 52.9454 12.5156C51.4941 12.5156 50.3182 13.6748 50.3182 15.1054V22.8682L44.9395 13.871C44.495 13.0633 43.6276 12.5156 42.6291 12.5156C41.1779 12.5156 40.002 13.6748 40.002 15.1054V26.6123C40.002 28.0429 41.1779 29.2021 42.6291 29.2021H46.7506C46.7506 29.2021 47.1437 29.1808 46.9049 28.7394C46.9049 28.7394 46.3725 27.8957 44.9694 27.0668C44.9694 27.0668 42.9774 26.0024 43.3141 23.9833C43.3141 23.9833 43.538 22.4627 45.2065 22.7391C45.2065 22.7391 46.9248 23.0301 47.7524 25.8635C47.7557 25.8635 48.0095 26.5175 48.1903 27.6603Z"
              fill="#53D9C1"
            />
            <path
              d="M95.2713 8.3125C93.9743 8.3125 92.9228 9.34907 92.9228 10.6276C92.9228 10.6391 92.9294 10.6472 92.9294 10.6587H92.9161C92.8979 11.6854 92.0537 12.516 91.0071 12.516C90.9955 12.516 90.9872 12.5095 90.9756 12.5095L90.9723 12.516H82.7624C81.4223 12.516 80.3359 13.5869 80.3359 14.9079C80.3359 16.229 81.4223 17.2999 82.7624 17.2999H85.2702V26.6126C85.2702 28.0432 86.4461 29.2024 87.8973 29.2024C89.3469 29.2024 90.5245 28.0432 90.5245 26.6126V17.3277H90.8761C94.6013 17.3277 97.6198 14.3521 97.6198 10.6799V10.6276C97.6198 9.34907 96.5683 8.3125 95.2713 8.3125Z"
              fill="#53D9C1"
            />
          </svg>
        </div>
      </div>
      <div className="w-[360px] h-12 px-6 py-3 backdrop-blur-xl justify-start items-center gap-3 inline-flex">
        <div className="grow shrink basis-0 flex-col justify-center items-start gap-3 inline-flex">
          <div className="text-center text-[#333333] text-base font-semibold font-['Pretendard'] leading-tight">
            휴대폰 본인인증
          </div>
        </div>
      </div>
      <div className="h-[339px] px-6 py-[60px] rounded-lg flex-col justify-start items-center gap-10 inline-flex">
        <div className="flex-col justify-start items-center gap-6 flex">
          <div className="flex-col justify-start items-center gap-6 flex">
            <div className="w-12 h-12 relative">
              <div className="w-12 h-12 left-0 top-0 absolute bg-[#a0f0e0] rounded-full" />
              <div className="w-1.5 h-6 left-[21px] top-[12px] absolute">
                <div className="w-1.5 h-[5px] left-0 top-[19px] absolute bg-black rounded-full" />
                <div className="w-1.5 h-4 left-0 top-0 absolute bg-black rounded-[64px]" />
              </div>
            </div>
            <div className="flex-col justify-start items-center gap-3 flex">
              <div className="text-center text-[#333333] text-lg font-extrabold font-['SUIT'] leading-normal">
                휴대폰 본인인증
              </div>
              <div className="text-center text-[#333333] text-sm font-normal font-['SUIT'] leading-[18px]">
                휴대폰 본인인증이 필요합니다.
                <br />
                아래 [본인인증] 버튼을 눌러서
                <br />
                본인인증을 진행해주세요
              </div>
            </div>
          </div>
          <div
            className="w-[268px] h-12 px-5 py-[15px] bg-[#a0f0e0] rounded justify-center items-center inline-flex"
            onClick={() => {
              /// nice-url 이라는 query string 을 읽고 decode 한다.
              const niceUrl = new URLSearchParams(window.location.search).get(
                "niceUrl"
              );
              if (niceUrl) {
                window.location.href = atob(niceUrl);
              }
            }}
          >
            <div className="text-[#333333] text-sm font-extrabold font-['SUIT'] leading-[18px]">
              본인 인증
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
