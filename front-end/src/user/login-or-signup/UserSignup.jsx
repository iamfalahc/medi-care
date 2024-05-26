import React, { useState } from 'react';
import { userNameSignUpValidation, userPasswordMatching, userSignUpPasswordValidation } from './validation';
import './Form.css';
import { Link } from 'react-router-dom';

 const UserSignUp=()=> {
  const [input, setInput] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    userName: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {
      userName: userNameSignUpValidation(input.userName),
      password: userSignUpPasswordValidation(input.password),
      confirmPassword: userPasswordMatching(input.password, input.confirmPassword)
    };

    setErrors(newErrors);

    if (!newErrors.userName && !newErrors.password && !newErrors.confirmPassword) {
      console.log({
        userName: input.userName,
        email: input.email,
        password: input.password,
        confirmPassword: input.confirmPassword
      });
    }
  };

  return (
 
      <form className="form" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <div className="form-wrapper">
        <div className="form-group">
          <label htmlFor="userName">User Name</label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={input.userName}
            onChange={handleChange}
            required
          />
          {errors.userName && <span className="error-message">{errors.userName}</span>}
        </div>
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
          {errors.email && <span className="error-message">{errors.email}</span>}
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
          {errors.password && <span className="error-message">{errors.password}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={input.confirmPassword}
            onChange={handleChange}
            required
          />
          {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
        </div>
        <button type="submit" className="submit-button">Sign Up</button>
        </div>
        <div className="login-link">
          <span>Already have an account? </span>
          <Link to={"/login"}>Log in</Link>
        </div>
      </form>
  
  );
}
export default UserSignUp