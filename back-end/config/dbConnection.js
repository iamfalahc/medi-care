const mongoose = require ("mongoose")

const connectDB = async()=>{
    try {
        const mongodbConnection = await mongoose.connect("mongodb://127.0.0.1:27017/medi-care")
        console.log(
            `MongoDB connected to: ${mongodbConnection.connection.name} ::::::: ${mongodbConnection.connection.host}`
          );
        } catch (error) {
          // Log error message if connection fails
          console.log(error);
          // Terminate the Node.js process if connection fails
          process.exit(1);
        }
}
module.exports = connectDB;