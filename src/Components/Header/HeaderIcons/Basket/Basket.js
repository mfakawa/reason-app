import React, { useContext } from "react";
import { CardContext } from "../../../../Contexts/CardContext";
import { BasketItems } from "./BasketItems";
import basket from "./basket.png";
import "./Basket.scss";

export const Basket = () => {
  const [newList, dispatch] = useContext(CardContext);

  return (
    <div className="basket">
      <img className="basket-image" src={basket} alt="basket" />
      <div className={`basket-items-amount ${newList.length !== 0 && "show"}`}>
        {newList.length}
      </div>
      <div>
        {newList ? (
          <div className="basket-items">
            <BasketItems newList={newList} dispatch={dispatch} />
          </div>
        ) : null}
      </div>
    </div>
  );
};
