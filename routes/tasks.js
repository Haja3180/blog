import  express from "express";
import { Task } from "../model/tasks.js";

export const task_router = new express.Router()

task_router.post('/task', async(req, res) => {
    console.log(req.body)
    const task = new Task(req.body)
    try{
        await task.save()
        res.status(201).send(task)
    }
    catch(e){
        res.status(400).send(e)   
    }
})

//faire un export
// export {route} 

