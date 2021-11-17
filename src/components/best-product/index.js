import React from "react";
import { HeaderSection } from "../_header-section";
import "./index.scss";

import bgBestProduct from "./../../assets/img/bes-bg@2x.png";

export const BestProduct = () => {
  return (
    <div
      style={{
        background: `url(${bgBestProduct})`,
        backgroundSize: "cover",
      }}
      className="bestProduct"
    >
      <div className="container">
        <div className="header-section">
          {HeaderSection(
            "Best Product",
            `How to create mobile-optimized videos in minutes. Not a designer,
every team makes a lot of videos Can be trimmed. Take the first `,
            `#f96400`
          )()}
        </div>
        <div className="best-list">
          {["01", "02", "03"].map((value, key) => {
            return (
              <div key={key} className="col-4">
                <div className="best-item">
                  <img
                    className="best-item-img"
                    srcSet={`/assets/img/best-image-${value}@2x.png 2x`}
                    alt=""
                  />
                  <img
                    srcSet={`/assets/img/producticon-${value}@2x.png 2x`}
                    alt=""
                  />
                  <div className="best-product-box">
                    <h3>How to create mobile-optimized</h3>
                    <div>Go</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
