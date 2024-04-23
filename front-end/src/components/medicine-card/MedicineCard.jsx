import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function MedicineCard({ medicineData }) {
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="185"
          image={medicineData.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="span" component="div">
            {medicineData.title}
          </Typography>
          <Typography variant="body2" color="text.secondary"><button class="btn btn-primary consult" type="button">
          Buy Now
        </button></Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}