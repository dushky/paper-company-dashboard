import React from "react";
import products from "../../data/products.json";
import PieChart from "../UI/PieChart";
import MostPopularCard from "../UI/MostPopularCard";
import TotalRevenueCard from "../UI/TotalRevenueCard";

const mostPopular = products.reduce((max, current) => {
  if (current.amount_sold > max.amount_sold) {
    return current;
  } else {
    return max;
  }
});

let totalSold = 0;
let totalRevenue = 0;
products.map((product) => {
  totalSold += product.amount_sold;
  totalRevenue += product.amount_sold * product.price;
});

const Statistics = () => {
  return (
    <>
      <PieChart
        data={products.map((product) => {
          return { label: product.name, value: product.amount_sold };
        })}
        centerLabel={`Total sold ${totalSold} pcs`}
      />
      <MostPopularCard title={"Most Popular"} data={mostPopular} />
      <TotalRevenueCard title={"Total Revenue"} data={{sold: totalSold, revenue: totalRevenue}} />
    </>
  );
};

export default Statistics;
