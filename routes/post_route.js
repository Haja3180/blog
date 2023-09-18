//spécification des routes posts
import  express from "express";
import { deletePosts, likePosts, readPosts, setPosts, updatePosts } from "../controllers/post_controller.js";

export const post_router = new express.Router()

//route pour ajout post (CREATE)
post_router.post('/post', setPosts)

//route pour lecture de post (READ)
post_router.get('/post/:id', readPosts)

// route pour update de post (UPDATE)
post_router.patch('/post/:id', updatePosts)

//route pour suppression de post (DELETE)
post_router.delete('/post/:id', deletePosts)

// route pour liker post (opération de type UPDATE)
post_router.patch('/like-post/:id', likePosts)

