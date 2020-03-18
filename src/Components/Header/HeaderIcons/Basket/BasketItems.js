import React, { useState, useEffect } from "react";
import { roundPrice } from "../../../../Functions/RoundPrice";
import trash from "./trash.png";
import "./BasketItems.scss";

export const BasketItems = ({ newList, dispatch }) => {
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    const totalCostList = newList.map(prod => prod.product.price * prod.count);
    setTotalCost(totalCostList.reduce((a, b) => b + a, 0));
  }, [newList]);

  const handleClick = (type, id) => () => dispatch({ type, id });

  return (
    <div>
      {newList.map(prod => {
        const id = prod.product.id;
        return (
          <div key={prod.product.id} className="basket-item">
            <div className="item-name">
              {prod.product.name}
              <span onClick={handleClick("DELETE", id)}>
                <img src={trash} alt="trash" />
              </span>
            </div>
            <div className="item-operations">
              <button onClick={handleClick("INCREASE", id)}>&#43;</button>
              <span>{prod.count}</span>
              <button onClick={handleClick("DECREASE", id)}>&#8722;</button>
            </div>
            <div className="item-cost">
              {(
                Math.round(prod.product.price * prod.count * 100) / 100
              ).toFixed(2)}{" "}
              PLN
            </div>
          </div>
        );
      })}
      <div
        style={totalCost === 0 ? { display: "none" } : { display: "block" }}
        className="total-cost"
      >
        Total {roundPrice(totalCost)} PLN
      </div>
    </div>
  );
};
