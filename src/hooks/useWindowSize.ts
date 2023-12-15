import { useEffect, useState } from "react";
interface breakpoints {
  width: number;
  height: number;
}

const useWindowSize = (): breakpoints => {
  const [windowSize, setWinowSize] = useState({ width: 0, height: 0 });
  useEffect(() => {
    const handleResize = () => {
      setWinowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
};

export default useWindowSize;

// const useWindowSize =()=>{
//     const breakpoint:[number, number]=[10,10];

//     breakpoint[0]=25;
//     breakpoint[1]=40
//   return breakpoint;
//   }
