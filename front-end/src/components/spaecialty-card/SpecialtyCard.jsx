import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {navigate,useNavigate} from "react-router-dom"

export default function SpecialtyCard({specialtyData}) {
    const navigate = useNavigate()
  return (
    <Card sx={{ maxWidth: 200 }}onClick={()=>navigate({pathname:"/category/"+specialtyData.id})} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="185"
          image={specialtyData.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="span" component="div" >
            {specialtyData.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}