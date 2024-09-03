import { useState, useEffect } from "react";

const useWindowSize = () => {
  const getWindowSize = () => {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  };

  const [windowSize, setWindowSize] = useState(getWindowSize);

  const handleResize = () => {
    setWindowSize(getWindowSize());
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return windowSize;
};

export default useWindowSize;
