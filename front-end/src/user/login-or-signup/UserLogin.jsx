import React, { useState } from 'react';
import './Form.css';
import { Link } from 'react-router-dom';

 const UserLogin=()=>{
  const [input, setInput] = useState({
    email: "",
    password: "",
 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value
    });
  };

  return (
 
      <form className="form" >
        <h1>Log in</h1>
        <div className="form-wrapper">
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={input.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={input.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">Sign Up</button>
        </div>
        <div className="login-link">
          <span>Don't have an account? </span>
          <Link to={"/signup"}>Sign up</Link>
        </div>
      </form>
   
  );
}
export default UserLogin