import React from "react";
import "./doctor-card.css";
import { Link } from "react-router-dom";
const DoctorCard = ({ data,isPatientRequest }) => {
  return (
    <div class="card" style={{ width: "18rem" }}>
      <img src={data.image} class="card-img-top" alt="..." />
      <div class="card-body doctor-info">
        <h5 class="card-title">{data.doctorName}</h5>
        <span class="card-text">{data.specialty}.</span>
        <span class="card-text">{data.qualification}.</span>
        <span class="card-text">{data.experience}.</span>
        <span class="card-text">{data.charge}.</span>
        <Link to={isPatientRequest ? "/user-form" : "/admin-home"}>
          <button class="btn btn-primary consult" type="button">
          {isPatientRequest ? "Book now" : "Approve"}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;
