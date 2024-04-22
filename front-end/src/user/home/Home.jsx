import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";
import Service from "../containers/service/Service";
import Specialty from "../containers/speciality/Specialty";
import Medicine from "../containers/medicine/Medicine";

const Home = () => {
  return (
    <div>
      <Navbar />
    <Service/>
    <Specialty/>
    <Medicine/>
    </div>
  );
};

export default Home;
