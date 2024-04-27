import React, { useState } from "react";
import AdminNavbar from "../../components/admin-navbar/AdminNavbar";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./add-medicine.css";
import Footer from "../../components/footer/Footer";

const AddMedicine = () => {
  const [input, setInput] = useState({
    name: "",
    title: "",
    place: "",
    description: "",
    price: "",
    image: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input);
    // Add your submission logic here
    toast.success("Product added successfully");
  };
  return (
    <div>
      <AdminNavbar />
      <div className="add-medicine-form-container">
        <form className="add-medicine-field-wrapper" onSubmit={handleSubmit}>
          <h1>Add new product</h1>

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
              placeholder="Title . . ."
              name="title"
              value={input.title}
              onChange={handleChange}
            />
            <label htmlFor="patient-gender">Title . . .</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Pin . . ."
              name="description"
              value={input.description}
              onChange={handleChange}
            />
            <label htmlFor="patient-place">Description . . .</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Price . . ."
              name="price"
              value={input.price}
              onChange={handleChange}
            />
            <label htmlFor="patient-mobile">Price . . .</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="file"
              className="form-control"
              id="product-image"
              name="image"
              value={input.image}
              onChange={handleChange}
            />
          </div>
          <button className="btn btn-primary booking" type="submit">
            Add product
          </button>
        </form>
        <ToastContainer />
      </div>
      <Footer/>
    </div>
  );
};

export default AddMedicine;
