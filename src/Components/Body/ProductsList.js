import React from "react";
import { SingleProduct } from "./SingleProduct";
import "./ProductsList.scss";

export const ProductsList = ({ products }) => {
  return (
    <div className="products">
      {products.map(product => {
        return <SingleProduct key={product.id} product={product} />;
      })}
    </div>
  );
};
