
import { createContext, useContext, useState } from "react";
import { contextType } from "react-modal";
 


export type contextType = {
    innerHeight: number,
    innerWidth:number
} 


const value = {innerHeight: window.innerHeight, innerWidth: window.innerWidth};


export const AppContext = createContext<contextType>(value);
export const useAppContext= () => {
   
    return useContext(AppContext);
}