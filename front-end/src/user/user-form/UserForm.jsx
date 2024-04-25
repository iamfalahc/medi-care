import React from "react";
import "./user-form.css";

const Form = () => {
  return (
 <div className="user-form-container">
       <div className="user-field-wrapper">
        <h1>Patient's details</h1>
        <div className="form-floating mb-3">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
          ></textarea>
          <label for="floatingTextareaDisabled">Patient's name . . .</label>
        </div>
        <div className="form-floating mb-3">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
          ></textarea>
          <label for="floatingTextareaDisabled">Patient's age . . .</label>
        </div>
        <div className="form-floating mb-3">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
          ></textarea>
          <label for="floatingTextareaDisabled">Gender . . .</label>
        </div>
        <div className="form-floating mb-3">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
          ></textarea>
          <label for="floatingTextareaDisabled">Age . . .</label>
        </div>
        <div className="form-floating mb-3">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
           
          ></textarea>
          <label for="floatingTextareaDisabled">Mobile number . . .</label>
        </div>
        <button class="btn btn-primary" type="button">
          Proceed to pay
        </button>
      </div>
 </div>
   
  );
};

export default Form;
