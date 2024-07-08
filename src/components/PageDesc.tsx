import React from "react";
import nl2br from "react-nl2br";

type Props = {
  content: string;
};
export const PageDesc: React.FC<Props> = ({ content }) => {
  return <p className="text-gray-700">{nl2br(content)}</p>;
};
