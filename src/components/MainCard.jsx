import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const card = (
  <React.Fragment>
    <CardContent sx={{backgroundColor:'#f5cff2'}}>
      <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
        Heading 1
      </Typography>
      <Typography variant="h5" component="div">
        Meaning
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function MainCard() {
  return (
    <div>
      <Box sx={{ minWidth: 355 }}>
        <Card variant="outlined">{card}</Card>
      </Box>
    </div>
  );
}
