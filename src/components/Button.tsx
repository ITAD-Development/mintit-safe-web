import React, { ReactNode } from "react";

type Props = {
  title: string;
  icon?: ReactNode;
  isDisabled?: boolean;
  onClick?: () => void;
};

export const Button: React.FC<Props> = ({ title, icon, isDisabled, onClick }) => {
  if (isDisabled) {
    return (
      <div className="flex w-full h-12 px-12 bg-emerald-50 rounded justify-center items-center gap-2">
        {icon}
        <div className="text-gray-300 text-sm font-extrabold">{title}</div>
      </div>
    );
  }

  return (
    <div className="flex w-full h-12 px-12 bg-teal-200 rounded justify-center items-center gap-2" onClick={onClick}>
      {icon}
      <div className="text-zinc-800 text-sm font-extrabold">{title}</div>
    </div>
  );
};
