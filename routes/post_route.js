//CRUD post
import  express from "express";
import { Post } from "../models/post_model.js";

export const post_router = new express.Router()

// -------------------- CREATE ---------------------
//route + AJOUT tâche à l'aide requete http POST via http://localhost:4000/post
post_router.post('/post', async(req, res) => {
    // fonction pour ajouter une tâche
    const post = new Post(req.body)
    console.log('instanciation OK :', post)
    try{
        await post.save()
        console.log('saugarde en base OK ! :', post)
        res.status(201).send(post)
    }
    catch(e){
        res.status(400).send(e)   
    }
})
//-----------------------------------------------------



// -------------------- READ ---------------------
//route + LECTURE tâche à l'aide requete http GET via http://localhost:4000/post
post_router.get('/post/:id', async(req, res) => {
    // fonction pour lire une tâche
    try{
        const searched_post = await Post.findById (req.params.id)
        res.status(201).send(searched_post)
        console.log('Lecture OK :', searched_post)
    }
    catch(e){
        res.status(400).send(e)   
    }
})
//-----------------------------------------------------



// -------------------- UPDATE ------------------------
// route + MAJ tâche à l'aide requete http PATCH via http://localhost:4000/post
post_router.patch('/post/:id', async(req, res) => {
    //fonction pour MAJ tâche
    const id = req.params.id
    console.log(id)
    try{
        const updated_post = await Post.findByIdAndUpdate (id, req.body, {new:true})
        console.log(updated_post)
        res.status(201).send(updated_post)
    }
    catch(e){
        res.status(400).send(e)   
    }
})
//-----------------------------------------------------



// -------------------- DELETE ---------------------
//route + SUPPRESSION tâche à l'aide requete http DELETE via http://localhost:4000/post
post_router.delete('/post/:id', async(req, res) => {
    const id = req.params.id
    console.log(id)

    // fonction pour supprimer une tâche
    try{
        const to_be_deleted_post = await Post.findById(id)
        console.log(to_be_deleted_post)
        await to_be_deleted_post.deleteOne()
        res.status(201).send('Elément supprimé !')
        // if (!to_be_deleted_post){
        //     res.status(400).send('Cet Id n\'existe pas !')
        // }else{
        //     await to_be_deleted_post.deleteOne()
        //     res.status(201).send('Elément supprimé !')
        // }
    }
    catch(e){
        res.status(400).send('L\'erreur suivante a été détectée : ' + e )   
    }
})
//-----------------------------------------------------

