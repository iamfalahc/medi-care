import React, { useState } from "react";
import "./user-form.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Form = () => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    gender: "",
    place: "",
    mobileNumber: "",
    date: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input);
    // Add your submission logic here
    toast.success("Appointment booked successfully!");
  };

  return (
    <div className="user-form-container">
      <form className="user-field-wrapper" onSubmit={handleSubmit}>
        <h1>Patient's details</h1>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Name . . ."
            name="name"
            value={input.name}
            onChange={handleChange}
          />
          <label htmlFor="patient-name">Name . . .</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Age . . ."
            name="age"
            value={input.age}
            onChange={handleChange}
          />
          <label htmlFor="patient-age">Gender . . .</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Gender . . ."
            name="gender"
            value={input.gender}
            onChange={handleChange}
          />
          <label htmlFor="patient-gender">Gender . . .</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Place . . ."
            name="place"
            value={input.place}
            onChange={handleChange}
          />
          <label htmlFor="patient-place">Place . . .</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Mobile number . . ."
            name="mobileNumber"
            value={input.mobileNumber}
            onChange={handleChange}
          />
          <label htmlFor="patient-mobile">Mobile number . . .</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="date"
            className="form-control"
            id="patient-booking-date"
            name="date"
            value={input.date}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-primary booking" type="submit">
          Book an appointment
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Form;
