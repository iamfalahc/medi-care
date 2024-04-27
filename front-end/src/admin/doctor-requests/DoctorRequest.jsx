import React from 'react'
import "./doctor-request.css"
import AdminNavbar from '../../components/admin-navbar/AdminNavbar'
import { doctorsCardData } from '../../dummyDatas/userData'
import DoctorCard from '../../components/doctor-card/DoctorCard'

const DoctorRequest = () => {
  return (
    <div>
      <AdminNavbar/>
    <div className="doctor-request-card-container">
    {doctorsCardData.map((item)=>{
        return(
            <DoctorCard data={item} key={item.id}/>

        )
    })}
    </div>
    </div>
  )
}

export default DoctorRequest
