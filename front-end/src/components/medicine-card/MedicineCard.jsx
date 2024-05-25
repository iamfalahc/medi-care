import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

export default function MedicineCard({ medicineData }) {
  return (
    <Card className="medicine-card" sx={{ maxWidth: 200 }}>
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
          <Typography variant="body2" color="text.secondary"><Link to={"/medicine-order-form"}><button className="btn btn-primary consult" type="button" >
          Buy Now
        </button></Link></Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
