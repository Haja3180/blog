import { User } from "../models/user_model.js"


//contrôleur CREATE pour création d'un user
export const setUsers = async (req, res) => {           //export de setUsers pour utilisation dans la route (user_route.js)
    const user = new User(req.body)
    console.log('création OK :', user)
    try{
        await user.save()
        res.status(201).send(user)
    }
    catch(e){
        res.status(400).send(e)   
    }
}


//contrôleur READ pour la lecture/affichage d'un user
export const readUsers = async (req, res) => {
    try{
        const searched_user = await User.findById (req.params.id)
        res.status(201).send(searched_user)
        console.log('lecture OK !')
    }
    catch(e){
        res.status(400).send(e)   
    }
}

//contrôleur UPDATE pour la modification d'un user
export const updateUsers = async(req, res) => {
    try{
        const updated_user = await User.findByIdAndUpdate (req.params.id, req.body, {new:true})
        console.log('update successful !', updated_user)
        res.status(201).send(updated_user)
    }
    catch(e){
        res.status(400).send(e)   
    }
}

//contrôleur DELETE pour suppression d'un user
export const deleteUsers = async(req, res) => {
    try{
        const to_be_deleted_user = User.findById(req.params.id)
        await to_be_deleted_user.deleteOne()
        res.status(201).send('Elément supprimé !')
        console.log('deletion successful !')
        }
    catch(e){
        res.status(400).send('L\'erreur suivante a été détectée : ' + e )   
    }
}
