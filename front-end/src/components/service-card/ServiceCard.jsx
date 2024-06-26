import React from 'react';
import { Navigate,useNavigate } from 'react-router-dom';

export default function ServiceCard({data}) {
  const navigate = useNavigate()
const handleNavigate=(id)=>{
  if (id===1) {
    navigate("/specialty")
  }else if(id===2){
    navigate("/medicines")
  }
}

  return (
<div className="card mb-3" style={{ maxWidth: "540px",cursor: "pointer"  }} onClick={()=>handleNavigate(data.id)}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={data.image} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
        <p className="card-text">{data.subTitle}</p>
        
      </div>
    </div>
  </div>
</div>
  );
}
