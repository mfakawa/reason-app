import React, { useState, useEffect } from "react";
import { ProductsList } from "./ProductsList";

export const Home = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetch("https://www.reasonapps.pl/data.json")
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="container">
      {products ? (
        <ProductsList products={products} />
      ) : (
        <div className="loading">Loading...</div>
      )}
    </div>
  );
};
