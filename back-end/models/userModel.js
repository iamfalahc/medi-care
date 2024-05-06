const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
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
    password: {
      type: String,
      required: true
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
  });
  

const User = mongoose.model("User", userSchema);

module.exports = User;
