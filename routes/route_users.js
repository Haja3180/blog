//CRUD user
import  express from "express";
import { User } from "../model/users.js";


export const user_router = new express.Router()

// -------------------- CREATE ---------------------
//route + AJOUT tâche à l'aide requete http POST via http://localhost:4000/user
user_router.post('/user', async(req, res) => {
    // fonction pour ajouter une tâche
    const user = new User(req.body)
    console.log('création OK :', user)
    try{
        await user.save()
        res.status(201).send(user)
    }
    catch(e){
        res.status(400).send(e)   
    }
})
//-----------------------------------------------------



// -------------------- READ ---------------------
//route + LECTURE tâche à l'aide requete http GET via http://localhost:4000/user
user_router.get('/user/:id', async(req, res) => {
    // fonction pour lire une tâche
    try{
        const searched_user = await User.findById (req.params.id)
        res.status(201).send(searched_user)
        console.log('lecture OK !')
    }
    catch(e){
        res.status(400).send(e)   
    }
})
//-----------------------------------------------------



// -------------------- UPDATE ------------------------
// route + MAJ tâche à l'aide requete http PATCH via http://localhost:4000/user
user_router.patch('/user/:id', async(req, res) => {
    //fonction pour MAJ tâche
    try{
        const updated_user = await User.findByIdAndUpdate (req.params.id, req.body, {new:true})
        console.log('update successful !', updated_user)
        res.status(201).send(updated_user)
    }
    catch(e){
        res.status(400).send(e)   
    }
})
//-----------------------------------------------------



// -------------------- DELETE ---------------------
//route + SUPPRESSION tâche à l'aide requete http DELETE via http://localhost:4000/user
user_router.delete('/user/:id', async(req, res) => {
    // fonction pour supprimer une tâche
    try{
        const to_be_deleted_user = User.findById(req.params.id)
        await to_be_deleted_user.deleteOne()
        res.status(201).send('Elément supprimé !')
        console.log('deletion successful !')
        }
    catch(e){
        res.status(400).send('L\'erreur suivante a été détectée : ' + e )   
    }
})
//-----------------------------------------------------
