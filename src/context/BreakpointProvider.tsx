
import React from "react";
import   { createContext, useState } from "react";
 
export enum BreakPoints {
    SM='sm',
    MD='md',
    LG='lg'
}

export type BreakpointType ={
    innerWidth: number,
    innerHeight:number,
    breakpoint: string,
    scrollY: number
}

export const BreakpointContext = createContext<BreakpointType| null>(null);

const BreakpointProvider = ({children}:any) => {

    const getBreakpointName=():string=>{ 
        let breakpoint='';
        if (window.innerWidth <648){
        breakpoint=BreakPoints.SM;
    } else if(window.innerWidth>=649 && window.innerWidth <1200){
        breakpoint= BreakPoints.MD;
    } else if(window.innerWidth> 1200){
        breakpoint=BreakPoints.LG;
    }
    return breakpoint;
    };
    
    const getBPObject  = () =>{
        let innerWidth = window.innerWidth;
        let innerHeight = window.innerHeight;
        let breakpoint =getBreakpointName();
        let scrollY =window.scrollY
        return {innerWidth, innerHeight, breakpoint, scrollY};
    }

    const resizeHandler= ()=>{
        setBp(getBPObject());
    }

    const [bp, setBp]= useState<BreakpointType>(getBPObject());     
    window.onresize= resizeHandler;
    window.onscroll= resizeHandler;
 

    return (
        <BreakpointContext.Provider value ={bp}>
            {children}
        </BreakpointContext.Provider>
    )
}

export {BreakpointProvider} 
