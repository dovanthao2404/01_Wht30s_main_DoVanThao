import React, { useState } from "react";
import { Button } from "../_button";
import { Card } from "../_card";
import "./index.scss";

export const ListProduct = () => {
  const [itemCurrent, setItemCurrent] = useState(10);

  const newArray = (item) => {
    const array = [];
    for (let i = 0; i < item; i++) {
      array.push(i);
    }
    return array;
  };

  return (
    <div className="list-product">
      <div className="container">
        <div className="row">
          {newArray(itemCurrent).map((item, key) => {
            return (
              <div
                key={key}
                className="col-20 col-xl-25 col-lg-33 col-md-50 col-xs-100"
              >
                <Card img="/assets/img/img-01.png" />
              </div>
            );
          })}
        </div>
        <div className="section-button">
          <Button
            click={() => {
              setItemCurrent(itemCurrent + 10);
            }}
          />
        </div>
      </div>
    </div>
  );
};
