import React from "react";
import { Button } from "../_button";
import { HeaderSection } from "../_header-section";
import news01 from "./../../assets/img/news-img-01.png";
import "./index.scss";
import news031 from "../../assets/img/news-object-031.png";
import news02 from "../../assets/img/news-object-02.png";

import news03 from "../../assets/img/news-img-03@2x.png";
import newsObject03 from "../../assets/img/news-object-03.png";
import newsObject04 from "../../assets/img/news-object-04.png";
import newsObject05 from "../../assets/img/news-object-05.png";

export const News = () => {
  return (
    <section className="happened-issue section">
      <div className="container">
        <div className="header-section">
          {HeaderSection(
            "Happened’s issue",
            `모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
            다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.`,
            `#110e03`,
            "Noto Sans KR"
          )()}
        </div>
        <div className="section-button">
          <Button />
        </div>
      </div>
      <div className="issue-list">
        <div className="row-full">
          <div className="col col-20 col-xl-25 col-lg-33 col-md-50 col-xs-100 whpn-issue">
            <div className="whpn-issue-wrap"></div>
            <div className="whpn-issue-content">
              <div>
                <h2>whpn issue</h2>
                <img src={news01} alt="" />
              </div>
            </div>
            <img className="img-coin" src={newsObject03} alt="" />
          </div>
          <div className="col col-20 col-xl-25 col-lg-33 col-md-50 col-xs-100">
            <div className="issue-brand">
              <div>B BRAND</div>
            </div>
            <img className="issue-img" src={news03} alt="" />
            <img className="img-hot" src={newsObject04} alt="" />
          </div>
          <div className="col col-20 col-xl-25 col-lg-33 col-md-50 col-xs-100">
            <div className="issue-brand">
              <div>C BRAND</div>
            </div>
            <img className="issue-img" src={news03} alt="" />
          </div>
          <div className="col col-20 col-xl-25 col-lg-33 col-md-50 col-xs-100">
            <div className="issue-brand orange">
              <div>D BRAND</div>
            </div>
            <img className="issue-img" src={news03} alt="" />
          </div>
          <div className="col col-20 col-xl-25 col-lg-33 col-md-50 col-xs-100">
            <div className="issue-brand">
              <div>E BRAND</div>
            </div>
            <img className="issue-img" src={news03} alt="" />
            <img className="img-lol" src={newsObject05} alt="" />
          </div>
        </div>
      </div>
      <img className="news02" src={news02} alt="" />
      <img className="news031" src={news031} alt="" />
    </section>
  );
};
