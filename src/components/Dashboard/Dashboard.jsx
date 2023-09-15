import Statistics from "../Statistics/Statistics";
import DataTable from "../UI/DataTable";
import products from "../../data/products.json";

const Dashboard = () => {
  return (
    <>
      <Statistics />
      <DataTable data={products}/>
    </>
  );
};

export default Dashboard;
