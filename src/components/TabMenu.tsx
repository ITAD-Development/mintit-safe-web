import React from "react";
import { Link } from "react-router-dom";

type Props = {
  activeIndex: number;
};
const TabMenu: React.FC<Props> = ({ activeIndex }) => {
  return (
    <div className="flex  border-gray-300">
      <div
        className={`flex justify-center py-2 px-4 flex-1  text-gray-600 ${
          activeIndex === 0 ? "border-b-4 border-blue-300" : ""
        }`}
      >
        <Link to="../installation" replace>
          설치방법
        </Link>
      </div>

      <div
        className={`flex justify-center py-2 px-4 flex-1 text-gray-600 ${
          activeIndex === 1 ? "border-b-4 border-blue-300" : ""
        }`}
      >
        <Link to="../caution" replace>
          주의사항
        </Link>
      </div>
    </div>
  );
};

export default TabMenu;
