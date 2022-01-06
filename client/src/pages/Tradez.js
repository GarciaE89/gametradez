import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_PRODUCTS } from "../utils/queries";
import SellList from "../components/Sellz";

const Tradez = () => {
  const { loading, data } = useQuery(QUERY_ALL_PRODUCTS);
  const products = data?.products || [];
  return (
    <div>
      <p id="maintext">Tradez</p>
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <SellList products={products} title="Game(z) stuff for sale..." />
        )}
      </div>
    </div>
  );
};

export default Tradez;
