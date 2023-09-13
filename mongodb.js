//initialisation de la bdd 

import mongoose from "mongoose";
export const db = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/Database_Haja", {})
    }
    catch(e){
        console.log(e)
    }
}

