import { useEffect, useState } from "react";

export const useScreenSize = () => {
  const [isXL, setIsXL] = useState(false);
  const [isUnderLG, setIsUnderLG] = useState(false);
  const [isUnder360, setIsUnder320] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    function handleResize() {
      setIsXL(window.innerWidth > 1280);
      setIsUnderLG(window.innerWidth <= 1024);
      setIsUnder320(window.innerWidth <= 360);
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }

    handleResize();
    window.addEventListener("resize", handleResize, false);

    return () => {
      window.removeEventListener("resize", handleResize, false);
    };
  }, []);

  return { isXL, isUnderLG, isUnder360, width, height };
};
