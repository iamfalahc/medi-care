import React from "react";
import { specialtyCardData } from "../../../dummyDatas/userData";
import SpecialtyCard from "../../../components/spaecialty-card/SpecialtyCard";
import { Link } from "react-router-dom";
import Specialties from "../../specialties/Specialties";

const Specialty = () => {
  return (
    <div className="container-wrapper">
      <span>Consult top doctors online for any health concern</span>
      <div className="container-card-wrapper">
        {specialtyCardData.map((data) => {
          return (
            <div>
              <SpecialtyCard specialtyData={data} />
            </div>
          );
        })}
      </div>
      <Link to={'/specialty'}><div class="d-grid gap-2">
        <button class="btn btn-outline-primary" type="button">
          View all specialties
        </button>
        </div></Link>
    </div>
  );
};

export default Specialty;
