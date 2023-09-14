import  express from "express";
import { Task } from "../model/tasks.js";

export const task_router = new express.Router()

// route ajout tâche à l'aide requete http post via http://localhost:4000/task
task_router.post('/task', async(req, res) => {
    console.log(req.body)
    // fonction pour ajouter une tâche
    const task = new Task(req.body)
    try{
        await task.save()
        res.status(201).send(task)
    }
    catch(e){
        res.status(400).send(e)   
    }
})


