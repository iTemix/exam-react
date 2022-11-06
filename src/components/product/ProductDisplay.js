import React from "react";
import { useParams } from "react-router-dom";
import { ProductsData } from "../../ProductsData";

function ProductDisplay() {
  const { id } = useParams();
  return (
    <div className="listOfProducts">
      <div className="productDisplay">
        <h1>{ProductsData[id - 1].name}</h1>{" "}
        <p>{ProductsData[id - 1].login}</p>{" "}
        <img src={ProductsData[id - 1].avatar_url } />{" "}
      </div>
    </div>
  );
}

export default ProductDisplay;
