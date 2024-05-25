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
const userRoute = require('../back-end/router/user')
const doctorRoute = require('../back-end/router/doctor')
const adminRoute = require('../back-end/router/admin')

const app = express()
const port = 5000;
connectDB()
app.use("/user",userRoute)
app.use("/doctor",doctorRoute)
app.use("/admin",adminRoute)
app.use(bodyParser.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.send("hello world welcome")
})


app.listen(port,(req,res)=>{
    console.log(`server is running on port ${port}`);
})