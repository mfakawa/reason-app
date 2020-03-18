import React, { useContext } from "react";
import { CardContext } from "../../Contexts/CardContext";
import { roundPrice } from "../../Functions/RoundPrice";
import basket from "../Header/HeaderIcons/Basket/basket.png";
import "./SingleProduct.scss";

export const SingleProduct = ({ product }) => {
  const [newList, dispatch] = useContext(CardContext);

  return (
    <div className="single-product">
      <div className="product-name">{product.name}</div>
      <div className="product-price">{roundPrice(product.price)} PLN</div>
      <div
        className="product-basket"
        onClick={() => dispatch({ type: "ADD", product, count: 1 })}
      >
        <img src={basket} alt="basket" />
      </div>
    </div>
  );
};
