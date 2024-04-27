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
            <div key={data.id}>
              <MedicineCard medicineData={data} />
            </div>
          );
        })}
      </div>
     <Link to={"/medicines"}> <div className="d-grid gap-2">
        <button className="btn btn-primary" type="button">
          View all medicines
        </button>
      </div></Link>
    </div>
  );
};

export default Medicine;
