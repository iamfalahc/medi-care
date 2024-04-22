import React from "react";
import "./specialty.css";
import { specialtyCardData } from "../../../dummyDatas/userData";
import SpecialtyCard from "../../../components/spaecialty-card/SpecialtyCard";

const Specialty = () => {
  return (
    <div className="container-wrapper">
      <span>Consult top doctors online for any health concern</span>
      <div className="specialty-card-wrapper">
        {specialtyCardData.map((data) => {
          return (
            <div>
              <SpecialtyCard specialtyData={data} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Specialty;
