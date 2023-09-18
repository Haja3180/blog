//initialisation de la bdd 
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()
export const db = async () => {
    try {
        await mongoose.connect(process.env.DB_URI, {})
    }
    catch(e){
        console.log(e)
    }
}

