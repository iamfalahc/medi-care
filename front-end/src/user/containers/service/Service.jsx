import React from "react";
import "./service.css";
import primaryCardData from "../../../dummyDatas/userData";
import PrimaryCard from "../../../components/service-card/ServiceCard"

const Container1 = () => {
  return (
    <div>
      <div className="primary-card-wrapper">
        {primaryCardData.map((data) => {
          return (
            <div>
              <PrimaryCard key={data.id} data={data} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Container1;
