import React from 'react'
import { Link } from 'react-router-dom'
import "../doctor.css"

const DoctorLogin = () => {
  return (
    <div className='login-page'>
   <div className="login-form-container">
   <span className='title'>Login</span>
      <input type="text" placeholder='Email . . .' />
      <input type="text" placeholder='Password . . .' />
     <div className="bottom-container">
     <button className='doctor-login-btn'>Login</button>
      <span>Already have an account ? <Link to={"/join as a doctor"}>Join</Link></span>
     </div>
   </div>
      
    </div>
  )
}

export default DoctorLogin
