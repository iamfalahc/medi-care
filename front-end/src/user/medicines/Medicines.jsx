import React from "react";
import { medicineCardData } from "../../dummyDatas/userData";
import MedicineCard from "../../components/medicine-card/MedicineCard";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Medicines = () => {
  return (
<div>
    <Navbar/>
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
    </div>
    <Footer/>
</div>
  );
};

export default Medicines;
