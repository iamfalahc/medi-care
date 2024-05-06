const express = require("express")
const connectDB = require("./config/dbConnection")
const mongoose = require("mongoose")
const cors = require("cors")
const User = require("./models/userModel")
const Doctor = require("./models/doctorModel")
const Admin = require("./models/adminModel")
const Product = require("./models/productModel")


const app = express()
const port = 5000;
connectDB()

app.get("/",(req,res)=>{
    res.send("hello world welcome")
})

app.listen(port,(req,res)=>{
    console.log(`server is running on port ${port}`);
})