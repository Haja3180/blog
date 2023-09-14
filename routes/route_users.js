import  express from "express";
import { User } from "../model/users.js";

export const user_router = new express.Router()

// route ajout user à l'aide requete http post http://localhost:4000/user
user_router.post('/user', async(req, res) => {
    console.log(req.body)
    //fonction pour ajouter un user
    const user = new User(req.body)
    try{
        await user.save()
        res.status(201).send(user)
    }
    catch(e){
        res.status(400).send(e)   
    }
})
