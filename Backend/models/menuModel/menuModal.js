import mongoose, { Schema } from "mongoose";

const menuSchema = new mongoose.Schema({
    itemName : {
        type : String,
        required : true
    },
    restaurantName : {
        type : String,
        required : true
    },
    itemDesc : {
        type : String,
        required : true
    },
    itemPrice : {
        type : String,
        required : true
    },
})

const menuModel = mongoose.model("menues" , menuSchema)

export default menuModel