import React from "react";
import "./primary-card.css"
import { navigate, useNavigate} from "react-router-dom";


const PrimaryCard = ({image, title, subtitle,id }) => {
    const navigate = useNavigate()
  return (
    <div className="primary-card" key={id} onClick={()=>navigate({pathname:"/category/"+id})}>
     <img src={image} alt="Card" />
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};


export default PrimaryCard;
