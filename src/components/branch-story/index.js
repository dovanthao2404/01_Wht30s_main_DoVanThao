import React from "react";
import { Button } from "../_button";
import { HeaderSection } from "./../_header-section";
import "./index.scss";
import object1 from "../../assets/img/object-01.png";
import object2 from "../../assets/img/object-02.png";
import object3 from "../../assets/img/object-03.png";
import object4 from "../../assets/img/object-04.png";
import object5 from "../../assets/img/object-05.png";
import object6 from "../../assets/img/object-06.png";
import object7 from "../../assets/img/object-07.png";
import background from "../../assets/img/window@2x.png";

const text = `청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을
풀이 옷을 봄바람이다. 새 천고에 놀이 내는 찾아 창공에 광야에서
살았으며, 듣는다. 수 있는 긴지라 사는가 낙원을 웅대한 아니다.
내는 이상 할지라도 피다. 피부가 불러 피고 인간의 타오르고 이성은
끝까지 칼이다. 쓸쓸한 희망의 못할 것은 목숨을 수 그들을 아름답고
고행을 끝에 설산에서 황금시대를 이상을 운다.`;

const subTitle = `모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.`;

export const BrandStory = (props) => {
  const { windowWidth } = props;
  return (
    <section className="brand-story section">
      <div className="container">
        <div className="header-section">
          {HeaderSection(
            "Brand Story",
            windowWidth < 520 ? subTitle.slice(0, 60) + "..." : subTitle,
            `#fcd32a`,
            "Noto Sans KR"
          )()}
        </div>
      </div>

      <div className="container-img">
        <img className="img-brand" srcSet={background} alt="" />
        <div className="brand-story-content">
          <div className="brand-story-text">
            <div style={{ position: "relative" }}>
              <h2>What Happened’s Brand story</h2>
              <p>
                {windowWidth < 768
                  ? text.slice(0, 28) + "..."
                  : windowWidth < 900
                  ? text.slice(0, 60) + "..."
                  : windowWidth < 992
                  ? text.slice(0, 120) + "..."
                  : windowWidth < 1030
                  ? text.slice(0, 160) + "..."
                  : text}
              </p>
              <Button />
            </div>
          </div>
        </div>
        <img className="object1" src={object1} alt="" />
        <img className="object2" src={object2} alt="" />
        <img className="object3" src={object3} alt="" />
        <img className="object4" src={object4} alt="" />
        <img className="object5" src={object5} alt="" />
        <img className="object6" src={object6} alt="" />
        <img className="object7" src={object7} alt="" />
        <div className="line"></div>
      </div>
    </section>
  );
};
