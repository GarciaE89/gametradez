import React from "react";
import { Link } from "react-router-dom";

const SellList = ({ products, title }) => {
  if (!products.length) {
    return <h3>Nothing For Sale Yet WIP</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {products && products.map((sell) => <p>{sell.name}</p>)}
    </div>
  );
};

export default SellList;
