import React from "react";
import imgIntroduction from "../../assets/img/introduction-bg@2x.png";
import { HeaderSection } from "../_header-section";
import "./index.scss";

export const Introduction = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${imgIntroduction})`,
        backgroundSize: "cover",
        minHeight: "320px",
      }}
      className="introduction"
    >
      <img style={{ opacity: 0 }} src={imgIntroduction} alt="" />
      <div className="container">
        <div className="introduction-wrap">
          <div className="introduction-content">
            {HeaderSection(
              "What happened!",
              ` How to create mobile-optimized videos in minutes. Not a designer,
          every team makes a lot of videos Can be trimmed. Take the first step
          to your brand's success. How to create mobile-optimized videos in
          minutes.`
            )()}
          </div>
        </div>
      </div>
    </div>
  );
};
