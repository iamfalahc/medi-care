import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-container">
      <div className="form-container">
        <h1>Log in</h1>
        <form>
          <div className="form-group">
            <span htmlFor="email">Email</span>
            <input type="email" id="email" name="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <span htmlFor="password">Password</span>
            <input type="password" id="password" name="password" placeholder="Enter your password" />
          </div>
          <button type="submit">Log In</button>
          <span>Don,t have an account ?<Link to="/signup">Sign Up</Link></span>
        </form>
      </div>
    </div>
  );
};

export default Login;
