import { useEffect, useState } from "react"



const useWindowSize = () =>{
    const [windowSize, setWinowSize]= useState({width : 0, height: 0});
    useEffect(() => {
        const handleResize = ()=> {setWinowSize({width:window.innerWidth, height: window.innerHeight})}
        handleResize();
        window.addEventListener('resize', handleResize);
        return ()=> window.removeEventListener("resize", handleResize);
    }, []);
}

export default useWindowSize;