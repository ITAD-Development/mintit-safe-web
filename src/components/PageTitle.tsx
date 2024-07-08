import React from "react";

type Props = {
  title: string;
};
export const PageTitle: React.FC<Props> = ({ title }) => {
  return <h2 className="text-2xl font-bold mb-4">{title}</h2>;
};
