import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";




export default function OutlinedCard({title, data}) {
  const card = (
    <React.Fragment>
      <CardContent>
      <Typography sx={{ fontSize: 16 }} color="text.primary" gutterBottom>
      {title}
      </Typography>
        <Typography variant="h5" component="div">
          {data.name}
        </Typography>

        <Typography variant="body2">
          Total sold: {data.sold} pcs
        </Typography>

        <Typography variant="body2">
          Revenue: {data.revenue}€
        </Typography>

      </CardContent>
    </React.Fragment>
  );
  return (
    <Box sx={{ minWidth: 275, maxWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
