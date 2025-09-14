"use client";
import React, { ReactNode } from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

interface CustomScrollbarProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const CustomScrollbar: React.FC<CustomScrollbarProps> = ({
  children,
  className,
  style,
}) => {
  return (
    <SimpleBar
      className={`custom-scrollbar ${className || ""}`}
      style={{
        height: "100vh",
        width: "100%",
        ...style,
      }}
      autoHide={false}
      forceVisible="y"
    >
      {children}
    </SimpleBar>
  );
};

export default CustomScrollbar;
