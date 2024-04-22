import React from "react";
import "./service.css";
import {serviceCardData} from "../../../dummyDatas/userData";
import ServiceCard from "../../../components/service-card/ServiceCard";

const Service = () => {
  return (
    <div>
      <div className="service-card-wrapper">
        {serviceCardData.map((data) => { 
          return (
            <div>
              <ServiceCard key={data.id} data={data} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Service;
