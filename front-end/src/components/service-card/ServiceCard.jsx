import React from 'react';
import { Navigate,useNavigate } from 'react-router-dom';

export default function ServiceCard({data}) {
  const navigate = useNavigate()
const handleNavigate=(id)=>{
  if (id===1) {
    navigate("/specialty")
  }else if(id===2){
    navigate("/medicine")
  }
}

  return (
<div class="card mb-3" style={{ maxWidth: "540px" }} onClick={()=>handleNavigate(data.id)}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={data.image} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{data.title}</h5>
        <p class="card-text">{data.subTitle}</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
  );
}
