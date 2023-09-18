//connexion à la BDD avec mongoose
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()
export const connect_db = async () => {
    try {
        await mongoose.connect(process.env.DB_URI, {})
    }
    catch(e){
        console.log(e)
    }
}

