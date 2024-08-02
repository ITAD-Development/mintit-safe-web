import styled from "@emotion/styled";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import usePopupStore from "../stores/usePopupStore";

type SideProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const IconContainer = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuTitle = styled.div`
  color: #333;
  font-family: SUIT;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const SideMenu: FC<SideProps> = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  return (
    <>
      {isOpen && (
        <div
          className="absolute top-0 right-0 bottom-0 left-0 inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <div
        className={`absolute top-0 right-0 w-full h-full bg-white transform transition-transform z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-[10px]	 ">
          <img
            src="/square-logo.svg"
            className="rounded-md"
            style={{
              filter: "drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.10))",
            }}
          />
          <img
            className="cursor-pointer"
            src="/images/menu/close-icon.svg"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </div>
        <nav className="mt-5 m-6 pb-[92px] border-b-2">
          <ul>
            <li
              className="flex mb-6 items-center gap-1.5 cursor-pointer"
              onClick={() => {
                navigate("/");
                setIsOpen(false);
              }}
            >
              <IconContainer className="flex ">
                <img src="/images/menu/home-icon.svg" />
              </IconContainer>
              <MenuTitle>민팃세이프 소개</MenuTitle>
            </li>
            <li
              className="flex mb-6 items-center gap-1.5 cursor-pointer"
              onClick={() => {
                navigate("/guide");
                setIsOpen(false);
              }}
            >
              <IconContainer>
                <img src="/images/menu/guide-icon.svg" />
              </IconContainer>
              <MenuTitle>민팃세이프 Guide</MenuTitle>
            </li>
            <li
              className="flex mb-6 items-center gap-1.5 cursor-pointer"
              onClick={() => {
                navigate("/download");
                setIsOpen(false);
              }}
            >
              <IconContainer>
                <img src="/images/menu/download-icon.svg" />
              </IconContainer>
              <MenuTitle>민팃세이프 Download</MenuTitle>
            </li>
            <li
              className="flex items-center gap-1.5 cursor-pointer"
              onClick={() => {
                navigate("/histories");
                setIsOpen(false);
              }}
            >
              <IconContainer>
                <img src="/images/menu/history-icon.svg" />
              </IconContainer>
              <MenuTitle>내 삭제 이력</MenuTitle>
            </li>
          </ul>
        </nav>
        <nav className="mt-9 m-6">
          <ul>
            <li
              className="flex mb-6 items-center gap-1.5 cursor-pointer"
              onClick={() => {
                usePopupStore.getState().openTerms();
                setIsOpen(false);
              }}
            >
              <MenuTitle>이용약관</MenuTitle>
            </li>
            <li
              className="flex mb-6 items-center gap-1.5 cursor-pointer"
              onClick={() => {
                usePopupStore.getState().openPrivacy();
                setIsOpen(false);
              }}
            >
              <MenuTitle>개인정보 처리방침</MenuTitle>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default SideMenu;
