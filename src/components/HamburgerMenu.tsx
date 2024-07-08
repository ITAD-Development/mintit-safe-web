import React from "react";

type Props = {
  onHambuger: () => void;
};

const HamburgerMenu: React.FC<Props> = ({ onHambuger }) => {
  return (
    <div className="relative">
      <button className="p-3 focus:outline-none" onClick={onHambuger}>
        <div className="space-y-2">
          <span className="block w-8 h-0.5 bg-gray-600"></span>
          <span className="block w-8 h-0.5 bg-gray-600"></span>
          <span className="block w-8 h-0.5 bg-gray-600"></span>
        </div>
      </button>
    </div>
  );
};

export default HamburgerMenu;
