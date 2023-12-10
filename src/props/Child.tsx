import React from "react";

interface ChildProps {
  color?: string;
  children?: React.ReactNode;
}

const Child = (colorProps: ChildProps) => {
  return <div>Child color = {colorProps.color}</div>;
};

const ChildAsFC: React.FC<ChildProps> = (color) => {
  return <div>hhh</div>;
};

export { Child, ChildAsFC };
