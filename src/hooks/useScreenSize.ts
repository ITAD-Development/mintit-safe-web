import { useEffect, useState } from "react";

export const useScreenSize = () => {
  const [isXL, setIsXL] = useState(false);
  const [isUnder360, setIsUnder320] = useState(false);
  useEffect(() => {
    function handleResize() {
      setIsXL(window.innerWidth > 1280);
      setIsUnder320(window.innerWidth <= 360);
    }

    handleResize();
    window.addEventListener("resize", handleResize, false);

    return () => {
      window.removeEventListener("resize", handleResize, false);
    };
  }, []);

  return { isXL, isUnder360 };
};
