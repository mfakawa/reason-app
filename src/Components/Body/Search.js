import React, { useState, useEffect } from "react";
import { ProductsList } from "./ProductsList";

export const Search = props => {
  const [searchedProducts, setSearchedProducts] = useState();
  const id = props.match.params.id;

  useEffect(() => {
    fetch("https://www.reasonapps.pl/data.json")
      .then(response => response.json())
      .then(data =>
        data.map(prod => {
          if (prod.name.toUpperCase().includes(id.toUpperCase())) {
            return prod;
          }
        })
      )
      .then(products =>
        setSearchedProducts(products.filter(product => product !== undefined))
      );
  }, [id]);

  return (
    <div className="container">
      {searchedProducts ? (
        <div>
          {searchedProducts.length !== 0 ? (
            <ProductsList products={searchedProducts} />
          ) : (
            <div className="no-results">{`No results for: ${id}`}</div>
          )}
        </div>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </div>
  );
};
