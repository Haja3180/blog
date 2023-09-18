//connexion à la BDD avec l'ORM mongoose
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()
export const connect_db = async () => {
    try {
        await mongoose.connect(process.env.DB_URI, {})
        console.log("Mongo connection OK !")
    }
    catch(e){
        console.log(e)
        process.exit()
    }
}

