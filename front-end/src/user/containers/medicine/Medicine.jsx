import React from "react";
import { medicineCardData } from "../../../dummyDatas/userData";
import MedicineCard from "../../../components/medicine-card/MedicineCard";
import "./medicine.css";

const Medicine = () => {
  return (
   
      <div className="container-wrapper">
        <span>Browse medicines & health products</span>
        <div className="medicine-card-wrapper">
          {medicineCardData.map((data) => {
            return (
              <div>
                <MedicineCard medicineData={data} />
              </div>
            );
          })}
        </div>
      </div>
   
  );
};

export default Medicine;
