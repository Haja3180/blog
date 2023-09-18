//connexion à la BDD avec l'ORM mongoose

import mongoose from "mongoose" //import du module mongoose (ORM) permettant d'attaquer la BDD via des méthodes et non des requêtes SQL
import dotenv from "dotenv" //import de dotenv qui permet d'utiliser les variables d'environnement 
dotenv.config() // appel de la méthode .config de dotenv
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

