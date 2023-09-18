//définition du modèle user
import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name : {
        type : String, 
        required : true
    },
    age : {
        type : Number,
    }
})
export const User=mongoose.model("User", userSchema)