import React from "react";
import { medicineCardData } from "../../../dummyDatas/userData";
import MedicineCard from "../../../components/medicine-card/MedicineCard";
import "../container.css";
import { Link } from "react-router-dom";

const Medicine = () => {
  return (
    <div className="container-wrapper">
      <span>Browse medicines & health products</span>
      <div className="container-card-wrapper">
        {medicineCardData.map((data) => {
          return (
            <div>
              <MedicineCard medicineData={data} />
            </div>
          );
        })}
      </div>
     <Link to={"/medicine"}> <div class="d-grid gap-2">
        <button class="btn btn-outline-primary" type="button">
          View all medicines
        </button>
      </div></Link>
    </div>
  );
};

export default Medicine;
