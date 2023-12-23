import React from "react";

interface CounterProps{
    counter :number
}

export const CounterAsFC: React.FC<CounterProps> =({counter})=>{

    

    return <div>{counter}</div>
}