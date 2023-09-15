import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID",  width: 70 },
  { field: "name", headerName: "Product Name", width: 200 },
  { field: "price", headerName: "Price", width: 200 },
  { field: "amount_sold", headerName: "Amount Sold", width: 200 },
  { field: "totalRevenue", headerName: "Total Revenue", width: 200 },
];

export default function DataTable({ data }) {
  const rows = data.map((item) => {
    return { ...item, totalRevenue: item.amount_sold * item.price };
  });

  return (
    <div style={{ height: 471, width: "100%", backgroundColor: "aliceblue", paddingTop:"100px" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}

      />
    </div>
  );
}
