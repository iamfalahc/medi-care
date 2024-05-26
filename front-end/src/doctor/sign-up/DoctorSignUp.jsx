import React from "react";
import { Link } from "react-router-dom";
import "../doctor.css"

const DoctorSignUp = () => {
  return (
    <div className="doctor-signup">
      <div className="form-container">
      <span className="title">Join as Doctor</span>
      <div className="field-group">
        <input type="text" placeholder="Name . . ." />
        <input type="text" placeholder="Email . . ."/>
      </div>
      <div className="field-group">
        <input type="text" placeholder="Qualification"/>
        <input type="text" placeholder="Specialty . . ."/>
      </div>
      <div className="field-group">
        <input type="text" placeholder="Experience . . ."/>
        <input type="text" placeholder="Fees . . ."/>
      </div>
      <div className="field-group">
        <input type="text" placeholder="Image . . ."/>
        <input type="text" placeholder="Password"/>
      </div>
     
      <input className="cpassword-input" type="text" placeholder="Confirm password. . ." />
  

      <div className="bottom-container">
      <button>JOIN</button>
      <span>Already have an account ? <Link to={"/doctor-login"}>Login</Link></span>
      </div>
      </div>
    </div>
  );
};

export default DoctorSignUp;
