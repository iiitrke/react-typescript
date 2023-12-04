
import { createContext, useContext, useState } from "react";
import { contextType } from "react-modal";
 


export type contextType = {
    size: string,
    name:string
}
// 
// const [value, setValue ]= () => useState<contextType>(null);


export const AppContext = createContext<contextType|null>(null);
export const useAppContext= () => {
    return useContext(AppContext);
}