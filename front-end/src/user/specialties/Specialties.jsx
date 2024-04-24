import React from 'react'
import { specialtyCardData } from '../../dummyDatas/userData';
import SpecialtyCard from '../../components/spaecialty-card/SpecialtyCard';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const Specialties = () => {
  return (
  <div>
    <Navbar/>
      <div className="container-wrapper">
      <span>Consult top doctors online for any health concern</span>
      <div className="container-card-wrapper">
        {specialtyCardData.map((data) => {
          return (
            <div key={data.id}>
              <SpecialtyCard specialtyData={data} />
            </div>
          );
        })}
      </div>
    </div>
    <Footer/>
  </div>
  )
}

export default Specialties
