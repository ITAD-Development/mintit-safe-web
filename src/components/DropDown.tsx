import styled from "@emotion/styled";
import React, { useState } from "react";

const Container = styled.div`
  display: flex;
  height: 48px;
  padding: 15px 16px;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  border-radius: 4px;
  border: 1px solid #b3b3b3;
  background: #fff;
  position: relative;
`;

const Title = styled.div`
  display: flex;
  flex: 1;
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;

export type DropDownProps = {
  options: {
    label: string;
    value: string;
  }[];
  selected: string;
  onChange: (value: string) => void;
};

const DropDown: React.FC<DropDownProps> = ({ options, selected, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      <Title>{selected || "선택"}</Title>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M7 9.5L12 14.5L17 9.5"
            stroke="#333333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: 50,
            left: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          {options.map((option) => (
            <Container>
              <Title
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
              >
                {option.label}
              </Title>
            </Container>
          ))}
        </div>
      )}
    </Container>
  );
};

export default DropDown;
