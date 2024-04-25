import React from "react";
import "./doctor-card.css";
import { Link } from "react-router-dom";
const DoctorCard = ({ data }) => {
  return (
    <div class="card" style={{ width: "18rem" }}>
      <img src={data.image} class="card-img-top" alt="..." />
      <div class="card-body doctor-info">
        <h5 class="card-title">{data.doctorName}</h5>
        <span class="card-text">{data.specialty}.</span>
        <span class="card-text">{data.qualification}.</span>
        <span class="card-text">{data.experience}.</span>
        <span class="card-text">{data.charge}.</span>
        <Link to={"/user-form"}>
          <button class="btn btn-primary consult" type="button">
            Consult now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;
