const mongoose = require("mongoose")

const doctorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    image:{
        type:String,
        required:true,
    },
    specialty:{
        type:String,
        required:true,
        trim:true
    },
    qualification:{
        type:String,
        required:true,
        trim:true
    },
    experience:{
        type:String,
        required:true,
        trim:true
    },
    fees:{
        type:Number,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
})
const Doctor = mongoose.model("Doctor",doctorSchema)
module.exports = Doctor