import express from "express"
// import mongoose from "mongoose";

//lancement bd 
import {db} from './mongodb.js'
import { User } from "./model/users.js";
import { Task } from "./model/tasks.js";
import { task_router } from "./routes/tasks.js";
// import { route } from "./routes/routes.js";
db();


const app = express();
const port = 4000;

//spécifie qu'on utilise du json
app.use(express.json())
app.use(task_router)
//fonction pour ajouter un user
const addUser = async (req, res)=>{
    const user = new User(req.body)
    try{
        await user.save()
        res.status(201).send(user)
    }
    catch(e){
        res.status(400).send(e)   
    }
}
//fonction pour supprimer un user


// // fonction pour ajouter une tâche
// const addTask = async (req, res)=>{
//     const task = new Task(req.body)
//     try{
//         await task.save()
//         res.status(201).send(task)
//     }
//     catch(e){
//         res.status(400).send(e)   
//     }
// }



//pour requete http post de user via http://localhost:4000/user
app.post('/user', async(req, res) => {
    console.log(req.body)
    addUser(req, res);
})

// //pour requete http post de task via http://localhost:4000/task
// app.post('/task', async(req, res) => {
//     console.log(req.body)
//     addTask(req, res);
// })




//route
app.get('/', (req, res) => {
    res.send('Task and user manager')
})

// toujours mettre à la fin : écouter sur le port
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
}
);
