import React from "react";
import { useParams } from "react-router-dom";
import { doctorsCardData } from "../../dummyDatas/userData";
import DoctorCard from "../../components/doctor-card/DoctorCard";
import "./category.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Category = () => {
  const { id } = useParams();

  return (
    <div>
      <Navbar />
      <div className="category-wrapper">
        {doctorsCardData.map((data) => {
          return <DoctorCard data={data} key={data.id} />;
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Category;
