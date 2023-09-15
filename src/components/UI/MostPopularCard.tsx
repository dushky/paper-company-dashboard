import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function OutlinedCard({ title, data }) {
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 16 }} color="text.primary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5" component="div">
          {data.name}
        </Typography>

        <Typography variant="body1">
          Sold: {data.amount_sold} pcs
        </Typography>

        <Typography variant="body1">
          Revenue: {data.amount_sold * data.price}€
        </Typography>
      </CardContent>
    </React.Fragment>
  );
  return (
    <Box sx={{ width: 160, height: 140 }}>
      <Card variant="outlined" sx={{ width: "100%", height: "100%" }}>
        {card}
      </Card>
    </Box>
  );
}
