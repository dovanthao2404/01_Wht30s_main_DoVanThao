import React from "react";
import "./index.scss";
export const Card = (props) => {
  const { img } = props;
  return (
    <div className="card">
      <img className="card-img" src={img} alt="" />
      <h3 className="card-title">[what happen] How to create </h3>
      <div className="card-info">
        <span>2,500 won</span>
        <div>
          <i className="bi bi-heart-fill icon-heart"></i>
          <span className="total-heart">236</span>
        </div>
      </div>
    </div>
  );
};
