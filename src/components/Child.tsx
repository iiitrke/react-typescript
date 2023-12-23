import React from "react";

interface ChildProps{
    color: string;
}

export const child = ({color}: ChildProps) => {
    return (
        <div> {color}</div>
    )
}

export const ChildAsFC: React.FC<ChildProps> = ({color })=> {
    return <div> {color}</div>
};
 

export default function WelcomeMessage(props:any) {  
    return <h1>Welcome to the , {props.name}</h1>;  
  }  


  class Third extends React.Component {  
    render() {  
       return (  
          <div>  <p>Third</p>
          </div>  
       );  
    }  
 }  
 