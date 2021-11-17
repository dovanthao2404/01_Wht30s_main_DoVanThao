import React from "react";
import "./index.scss";
export const Button = (props) => {
  const { click } = props;
  return (
    <button onClick={click} className="btn-more">
      SEE MORE
    </button>
  );
};
