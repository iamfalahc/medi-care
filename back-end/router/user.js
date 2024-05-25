const express = require("express");
const router = express.Router();

// ROUTE TO FETCH ALL SPECIALTIES
router.get("/specialties", (req, res) => {
  res.json("all specialties");
});
// ROUTE TO FETCH ALL PRODUCTS
router.get("/products", (req, res) => {
  res.json("all products");
});

//GET DOCTORS BY SPECIALTY
router.get("/specialties/:id/doctors", async (req, res) => {
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
router.post("/doctor/:id/appointment", async (req, res) => {
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
      bookingDate,
    });

    // Save the appointment to the database
    await newAppointment.save();

    res
      .status(201)
      .json({
        message: "Appointment booked successfully",
        appointment: newAppointment,
      });
  } catch (error) {
    console.error("Error booking appointment:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
