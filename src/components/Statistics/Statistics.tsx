import React from "react";
import products from "../../data/products.json";
import PieChart from "../UI/PieChart";

const Statistics = () => {
  return (
    <>
      <PieChart
        data={products.map((product) => {
          return { label: product.name, value: product.amount_sold };
        })}
        centerLabel={"Total sold"}
      />
      
    </>
  );
};

export default Statistics;
