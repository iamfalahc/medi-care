const express = require("express")
const connectDB = require("./config/dbConnection")
const mongoose = require("mongoose")
const cors = require("cors")
const bodyParser = require("body-parser");
const User = require("./models/userModel")
const Doctor = require("./models/doctorModel")
const Admin = require("./models/adminModel")
const Product = require("./models/productModel")
const Appointment = require("./models/appointmentModel")
const buyerSchema = require("./models/buyerModel")


const app = express()
const port = 5000;
connectDB()
app.use(bodyParser.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.send("hello world welcome")
})
// ROUTE TO FETCH ALL SPECIALTIES
app.get("/specialties", (req, res) => {
    res.json("all specialties");
  });
// ROUTE TO FETCH ALL PRODUCTS
app.get("/products", (req, res) => {
    res.json("all products");
  });

//GET DOCTORS BY SPECIALTY
app.get("/specialties/:id/doctors", async (req, res) => {
    try {
        const specialtyId = req.params.id;
        // Assuming you have a Doctor model with a specialty field
        const doctors = await Doctor.find({ specialty: specialtyId });
        res.json(doctors);
    } catch (error) {
        console.error("Error fetching doctors by specialty:", error);
        res.status(500).json({ message: "Server Error" });
    }
});
//BOOK APPOINTMENT WITH DOCTOR
app.post("/doctor/:id/appointment", async (req, res) => {
    try {
        const { id } = req.params; // Doctor's ID
        const { name, gender, place, age, mobileNumber, bookingDate } = req.body; // Extracting appointment details

        // Find the user by name
        const user = await User.findOne({ username: name });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Create a new appointment record
        const newAppointment = new Appointment({
            userId: user._id, // Assuming user has a unique ID
            doctorId: id,
            gender,
            place,
            age,
            mobileNumber,
            bookingDate
        });

        // Save the appointment to the database
        await newAppointment.save();

        res.status(201).json({ message: "Appointment booked successfully", appointment: newAppointment });
    } catch (error) {
        console.error("Error booking appointment:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.listen(port,(req,res)=>{
    console.log(`server is running on port ${port}`);
})