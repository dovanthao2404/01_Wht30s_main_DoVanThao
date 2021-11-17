import React from "react";
import "./index.scss";
export const HeaderSection = (
  title,
  subTitle,
  color = "white",
  fontFamily = "Montserrat"
) => {
  return () => {
    return (
      <>
        <h1 style={{ color }} className="header-title">
          {title}
        </h1>
        <p style={{ color, fontFamily }} className="header-sub">
          {subTitle}
        </p>
      </>
    );
  };
};
