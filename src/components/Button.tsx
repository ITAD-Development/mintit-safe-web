import React, { ReactNode } from "react";

type Props = {
  title: string;
  icon?: ReactNode;
  isDisabled?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
};

export const Button: React.FC<Props> = ({
  title,
  icon,
  isDisabled,
  onClick,
  style,
}) => {
  if (isDisabled) {
    return (
      <div
        className="flex w-full h-12 px-12 bg-emerald-50 rounded justify-center items-center gap-2"
        style={style}
      >
        {icon}
        <div className="text-gray-300 text-sm font-extrabold">{title}</div>
      </div>
    );
  }

  return (
    <div
      className="flex w-full h-12 px-12 rounded justify-center items-center gap-2 cursor-pointer"
      onClick={onClick}
      style={{
        backgroundColor: "#A0F0E0",
        ...style,
      }}
    >
      {icon}
      <div
        className="text-sm font-extrabold"
        style={{
          color: "#333",
        }}
      >
        {title}
      </div>
    </div>
  );
};
