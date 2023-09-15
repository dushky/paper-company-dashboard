import React from "react";
import "./Statistics.css";
import products from "../../data/products.json";
import PieChart from "../UI/PieChart";
import MostPopularCard from "../UI/MostPopularCard";
import TotalRevenueCard from "../UI/TotalRevenueCard";

const mostPopularProduct = products.reduce((max, current) => {
  if (current.amount_sold > max.amount_sold) {
    return current;
  } else {
    return max;
  }
});

const mostRevenueProduct = products.reduce((max, current) => {
  const currentRevenue = current.amount_sold * current.price;
  const maxRevenue = max.amount_sold * max.price;

  return currentRevenue > maxRevenue ? current : max;
});

let totalSold = 0;
let totalRevenue = 0;
products.map((product) => {
  totalSold += product.amount_sold;
  totalRevenue += product.amount_sold * product.price;
});

const Statistics = () => {
  return (
    <div className="statistics">
      <div className="pie-chart">
        <PieChart
          data={products.map((product) => {
            return { label: product.name, value: product.amount_sold };
          })}
          centerLabel={`Total sold ${totalSold} pcs`}
        />
      </div>

      <div className="cards-container">
        <div className="card">
          <MostPopularCard title={"Most Popular"} data={mostPopularProduct} />
        </div>
        <div className="card">
          <TotalRevenueCard
            title={"Total Revenue"}
            data={{ sold: totalSold, revenue: totalRevenue }}
          />
        </div>
        <div className="card">
          <MostPopularCard title={"Most Revenue"} data={mostRevenueProduct} />
        </div>
      </div>
    </div>
  );
};

export default Statistics;
