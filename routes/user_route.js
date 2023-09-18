//spécification des routes users
import  express from "express";
import { deleteUsers, readUsers, setUsers, updateUsers } from "../controllers/user_controller.js";

export const user_router = new express.Router()

//route pour ajout user (CREATE)
user_router.post('/user', setUsers)

//route pour lecture de user (READ)
user_router.get('/user/:id', readUsers)

// route pour update de user (UPDATE)
user_router.put('/user/:id', updateUsers)

//route pour suppression de user (DELETE)
user_router.delete('/user/:id', deleteUsers)

