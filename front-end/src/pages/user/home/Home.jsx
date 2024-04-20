import React from "react";
import Navbar from "../../../components/navbar/Navbar";
import PrimaryCard from "../../../components/primary-card/PrimaryCard";
import primaryCardData from "../../../dummyDatas/userData";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="primary-card-wrapper">
        {primaryCardData.map((data) => {
          return (
            <div>
              <PrimaryCard
                key={data.id}
                image={data.image}
                title={data.title}
                subtitle={data.subTitle}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
