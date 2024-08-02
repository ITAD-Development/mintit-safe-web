import { FC } from "react";
import { useNavigate } from "react-router-dom";
import MainCarousel from "./MainCarousel";

const Button: FC<{
  title: string;
  onClick?: () => void;
}> = ({ title, onClick }) => {
  return (
    <div
      className="h-10 px-3.5 py-2.5 bg-white rounded-[500px] border justify-center items-center gap-2.5 inline-flex cursor-pointer"
      style={{
        borderColor: "#53D9C1",
      }}
      onClick={onClick}
    >
      <div
        className="text-base font-bold font-['SUIT'] leading-tight"
        style={{
          color: "#3FDBBF",
        }}
      >
        {title}
      </div>
    </div>
  );
};

const MainFloatingLeft = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-end xl:pr-[310px] lg:pr-[50px] h-full justify-center">
      <div className="flex flex-col items-start">
        <div>
          <span
            className="text-[28px] font-normal font-['SUIT']"
            style={{
              color: "#1F303B",
            }}
          >
            쉽고{" "}
          </span>
          <span
            className="text-[28px] font-bold font-['SUIT']"
            style={{
              color: "#1F303B",
            }}
          >
            안전하게
          </span>
          <span
            className="text-[28px] font-normal font-['SUIT']"
            style={{
              color: "#1F303B",
            }}
          >
            {" "}
            데이터{" "}
          </span>
          <span
            className="text-[28px] font-bold font-['SUIT']"
            style={{
              color: "#1F303B",
            }}
          >
            완적삭제
          </span>
        </div>
        <div className="mb-[20px]">
          <span
            className="text-6xl font-extrabold font-['SUIT']"
            style={{
              color: "#09CCBD",
            }}
          >
            민팃
          </span>
          <span className="text-slate-800 text-6xl font-extrabold font-['SUIT']">
            세이프
          </span>
        </div>
        <div className="flex flex-row gap-2 w-[300px] flex-wrap">
          <div
            className="w-10 h-10 p-2.5 rounded-[500px]  justify-center items-center inline-flex cursor-pointer"
            style={{
              backgroundColor: "#53D9C1",
            }}
            onClick={() => {
              navigate("/");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path d="M4.16667 10H2.5L10 2.5L17.5 10H15.8333" fill="white" />
              <path
                d="M4.16667 10V15.8333C4.16667 16.2754 4.34226 16.6993 4.65482 17.0118C4.96738 17.3244 5.39131 17.5 5.83333 17.5H14.1667C14.6087 17.5 15.0326 17.3244 15.3452 17.0118C15.6577 16.6993 15.8333 16.2754 15.8333 15.8333V10"
                fill="white"
              />
              <path d="M8.33333 10H11.6667V13.3333H8.33333V10Z" fill="white" />
              <path
                d="M8.6665 10.332H11.3339V12.9987H8.6665V10.332Z"
                fill="white"
              />
            </svg>
          </div>
          <Button
            title="민팃세이프 소개"
            onClick={() => {
              navigate("/");
            }}
          />
          <Button
            title="이용방법"
            onClick={() => {
              navigate("/guide");
            }}
          />
          <Button
            title="다운로드"
            onClick={() => {
              navigate("/download");
            }}
          />
          <Button
            title="내 삭제 이력"
            onClick={() => {
              navigate("/histories");
            }}
          />
        </div>
      </div>
      <div className="pr-[15px] mt-[41px]">
        <MainCarousel />
      </div>
    </div>
  );
};

export default MainFloatingLeft;
