const mongoose = require("mongoose")

const appointmentSchema = new mongoose.Schema({
    gender: {
        type: String,
        required: true,
        trim: true
      },
      place: {
        type: String,
        required: true,
        trim: true
      },
      age: {
        type: Number,
        required: true
      },
      mobileNumber: {
        type: Number,
        required: true
      },
      bookingDate: {
        type: Date,
        required:true
      }
})

const Appointment = mongoose.model("Appointment",appointmentSchema)
module.exports=Appointment