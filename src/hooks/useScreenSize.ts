import { useEffect, useState } from "react";

export const useScreenSize = () => {
  const [isXL, setIsXL] = useState(false);
  useEffect(() => {
    function handleResize() {
      setIsXL(window.innerWidth > 1280);
    }

    handleResize();
    window.addEventListener("resize", handleResize, false);

    return () => {
      window.removeEventListener("resize", handleResize, false);
    };
  }, []);

  return isXL;
};
