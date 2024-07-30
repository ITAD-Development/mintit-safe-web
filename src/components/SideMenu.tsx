import { FC } from "react";
import { Link } from "react-router-dom";

type SideProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const SideMenu: FC<SideProps> = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {isOpen && (
        <div
          className="absolute top-0 right-0 bottom-0 left-0 inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <div
        className={`absolute top-0 right-0 w-4/5 h-full bg-white transform transition-transform z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-5 right-5 p-3 focus:outline-none"
          onClick={() => setIsOpen(false)}
        >
          <span className="block w-6 h-0.5 bg-gray-600 rotate-45"></span>
          <span className="block w-6 h-0.5 bg-gray-600 -rotate-45"></span>
        </button>
        <nav className="mt-16 p-4">
          <ul>
            <li className="mb-4">
              <Link to="/" className="text-gray-800">
                MINTIT safe 소개
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/guide" className="text-gray-800">
                MINTIT safe Guide
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/download/aos" className="text-gray-800">
                MINTIT safe Download
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/histories" className="text-gray-800">
                내 삭제 이력
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default SideMenu;
