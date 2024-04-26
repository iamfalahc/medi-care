import React, { useState } from "react";
import "./order-form.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const OrderForm = () => {
  const [input, setInput] = useState({
    name: "",
    address: "",
    place: "",
    pin: "",
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
    toast.success("Order placed successfully");
  };

  return (
    <div className="user-form-container">
      <form className="user-field-wrapper" onSubmit={handleSubmit}>
        <h1>Details</h1>
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
            placeholder="address . . ."
            name="address"
            value={input.address}
            onChange={handleChange}
          />
          <label htmlFor="patient-age">Address . . .</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="place . . ."
            name="place"
            value={input.place}
            onChange={handleChange}
          />
          <label htmlFor="patient-gender">Place . . .</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Pin . . ."
            name="pin"
            value={input.pin}
            onChange={handleChange}
          />
          <label htmlFor="patient-place">Pin . . .</label>
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
            id="patient-date"
            name="date"
            value={input.date}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-primary booking" type="submit">
          Order now
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default OrderForm;
