//CRUD task
import  express from "express";
import { Task } from "../model/tasks.js";

export const task_router = new express.Router()

// -------------------- CREATE ---------------------
//route + AJOUT tâche à l'aide requete http POST via http://localhost:4000/task
task_router.post('/task', async(req, res) => {
    // fonction pour ajouter une tâche
    const task = new Task(req.body)
    console.log(task)
    try{
        await task.save()
        res.status(201).send(task)
    }
    catch(e){
        res.status(400).send(e)   
    }
})
//-----------------------------------------------------



// -------------------- READ ---------------------
//route + LECTURE tâche à l'aide requete http GET via http://localhost:4000/task
task_router.get('/task/:id', async(req, res) => {
    // fonction pour lire une tâche
    const id = req.params.id
    console.log(id)
    try{
        const searched_task = await Task.findById (id)
        res.status(201).send(searched_task)
    }
    catch(e){
        res.status(400).send(e)   
    }
})
//-----------------------------------------------------



// -------------------- UPDATE ------------------------
// route + MAJ tâche à l'aide requete http PATCH via http://localhost:4000/task
task_router.patch('/task/:id', async(req, res) => {
    //parcourir les MAJ avec ce qu'il y a dans le body et resauvegarder
    const id = req.params.id
    console.log(id)
    try{
        const updated_task = await Task.findByIdAndUpdate (id, req.body, {new:true})
        console.log(updated_task)
        res.status(201).send(updated_task)
    }
    catch(e){
        res.status(400).send(e)   
    }
})
//-----------------------------------------------------



// -------------------- DELETE ---------------------
//route + SUPPRESSION tâche à l'aide requete http DELETE via http://localhost:4000/task
task_router.delete('/task/:id', async(req, res) => {
    const id = req.params.id
    console.log(id)

    // fonction pour supprimer une tâche
    try{
        const to_be_deleted_task = await Task.findById(id)
        console.log(to_be_deleted_task)
        await to_be_deleted_task.deleteOne()
        res.status(201).send('Elément supprimé !')
        // if (!to_be_deleted_task){
        //     res.status(400).send('Cet Id n\'existe pas !')
        // }else{
        //     await to_be_deleted_task.deleteOne()
        //     res.status(201).send('Elément supprimé !')
        // }
    }
    catch(e){
        res.status(400).send('L\'erreur suivante a été détectée : ' + e )   
    }
})
//-----------------------------------------------------

