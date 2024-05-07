const mongoose = require("mongoose")

const buyerSchema = new mongoose.Schema({
    place:{
        type:String,
        required:true,
        trim:true,
    },
    address:{
        type:String,
        required:true,
        trim:true,
    },
    pin:{
        type:Number,
        required:true,
        trim:true,
    },
    mobileNumber:{
        type:Number,
        required:true,
        trim:true,
    },
    date:{
        type:Number,
        required:true,
    },
})

const Buyer = mongoose.model("Buyer",buyerSchema)
module.exports=Buyer