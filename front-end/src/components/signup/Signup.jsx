import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="sign-up">
      <div className="form-container">
        <h1>Sign Up</h1>
      <form action="">
      <div className="field-container">
          <span>User Name</span>
          <input type="text" />
        </div>
        <div className="field-container">
          <span>Email</span>
          <input type="text" />
        </div>
        <div className="field-container">
          <span>Password</span>
          <input type="text" />
        </div>
        <div className="field-container">
          <span>Confirm Password</span>
          <input type="text" />
        </div>
        <button>Sign up</button>
      </form>
      <span>Already have an account <Link to="/login">Login</Link></span>
      </div>
    </div>
  );
};

export default Signup;
