import React from "react";

const PrimaryCard = ({image, title, subtitle }) => {
  return (
    <div>
      <image src={{image}}/>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

export default PrimaryCard;
