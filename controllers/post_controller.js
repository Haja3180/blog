import { Post } from "../models/post_model.js"


//contrôleur CREATE (pour création d'un post (au sens post d'un blog))
export const setPosts = async (req, res) => {           //export de setPosts pour utilisation dans la route (post_route.js)
    const post = new Post(req.body)                     //instanciation d'un post à partir de la classe Post
    console.log('instanciation OK :', post)
    try{
        await post.save()                               //sauvegarde en BDD
        console.log('saugarde en base OK ! :', post)
        res.status(201).send(post)
    }
    catch(e){
        res.status(400).send(e)   
    }
}


//contrôleur READ pour la lecture/affichage d'un post
export const readPosts = async (req, res) => {
    try{
        const searched_post = await Post.findById (req.params.id)
        res.status(201).send(searched_post)
        console.log('Lecture OK :', searched_post)
    }
    catch(e){
        res.status(400).send(e)   
    }
}

//contrôleur UPDATE pour la modification d'un post
export const updatePosts = async(req, res) => {
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
}

//contrôleur DELETE pour suppression d'un post
export const deletePosts = async(req, res) => {
    const id = req.params.id
    console.log(id)
    try{
        const to_be_deleted_post = await Post.findById(id)
        console.log(to_be_deleted_post)
        await to_be_deleted_post.deleteOne()
        res.status(201).send('Elément supprimé !')
    }
    catch(e){
        res.status(400).send('L\'erreur suivante a été détectée : ' + e )   
    }
}

//liker un post (update)
export const likePosts = async (req, res) => {
    try{
        const like_post = await Post.findByIdAndUpdate(
            req.params.id, 
            {$addToSet: {post_likers: req.body.likerId}},
            {new:true})
        .then((data) => res.status(201).send(data))
    
    }catch(e){
        res.status(400).send('erreur :' + e)
    }
}

//disliker un post (update)
export const dislikePosts = async (req, res) => {
    try{
        const like_post = await Post.findByIdAndUpdate(
            req.params.id, 
            {$pull: {post_likers: req.body.dislikerId}},
            {new:true})
        .then((data) => res.status(201).send(data))
    
    }catch(e){
        res.status(400).send('erreur :' + e)
    }
}