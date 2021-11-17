import React from "react";
import banner from "../../assets/img/main-banner@2x.jpg";
export const Banner = () => {
  return (
    <div>
      <img
        style={{ minHeight: "300px", objectFit: "cover" }}
        src={banner}
        alt=""
      />
    </div>
  );
};
