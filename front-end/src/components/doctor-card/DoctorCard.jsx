import React from "react";
import "./doctor-card.css";
const DoctorCard = ({ data }) => {
  return (
    <div class="card" style={{width: "18rem"}}>
      <img src={data.image} class="card-img-top" alt="..." />
      <div class="card-body doctor-info">
        <h5 class="card-title">{data.doctorName}</h5>
        <span class="card-text">{data.specialty}.</span>
        <span class="card-text">{data.qualification}.</span>
        <span class="card-text">{data.experience}.</span>
        <span class="card-text">{data.charge}.</span>
        <a href="#" class="btn btn-primary">
          Consult Now
        </a>
      </div>
    </div>
  );
};

export default DoctorCard;
