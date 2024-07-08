import React from "react";

type Props = {
  title: string;
};

export const Button: React.FC<Props> = ({ title }) => {
  return (
    <div className=" bg-blue-500 text-white flex align-center justify-center rounded-md p-2">
      {title}
    </div>
  );
};
