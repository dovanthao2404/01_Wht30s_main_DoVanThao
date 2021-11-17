import React from "react";
import { HeaderSection } from "../_header-section";
import { Button } from "../_button";
import "./index.scss";
import video from "../../assets/img/video.png";
import videoObj1 from "../../assets/img/video-object-01.png";
import videoObj2 from "../../assets/img/video-object-02.png";
import videoObj3 from "../../assets/img/video-object-03.png";
import videoObj4 from "../../assets/img/video-object-04.png";
import videoObj5 from "../../assets/img/video-object-05.png";
import videoObj6 from "../../assets/img/video-object-06.png";
import videoObj7 from "../../assets/img/video-object-07.png";
import videoObj8 from "../../assets/img/video-object-08.png";
import videoObj9 from "../../assets/img/video-object-09.png";

export default function WhatHappenedVideo() {
  return (
    <div className="video-wrap">
      <section className="what-video section">
        <div className="container">
          <div className="header-section">
            {HeaderSection(
              "what happened",
              `How to create mobile-optimized videos in minutes. Not a designer,
            every team makes a lot of videos Can be trimmed. Take the first `,
              `#110e03`
            )()}
          </div>
          <div className="section-button">
            <Button />
          </div>
        </div>
        <div className="container-img">
          <img className="img-brand" srcSet={video} alt="" />
          <img className="videoObj1" src={videoObj1} alt="" />
          <img className="videoObj2" src={videoObj2} alt="" />
          <img className="videoObj3" src={videoObj3} alt="" />
          <img className="videoObj4" src={videoObj4} alt="" />
          <img className="videoObj5" src={videoObj5} alt="" />
          <img className="videoObj6" src={videoObj6} alt="" />
          <img className="videoObj7" src={videoObj7} alt="" />
          <img className="videoObj8" src={videoObj8} alt="" />
          <img className="videoObj9" src={videoObj9} alt="" />
        </div>
      </section>
    </div>
  );
}
