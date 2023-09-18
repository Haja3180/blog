//post model
import mongoose from 'mongoose';

const postschema = new mongoose.Schema({
    post_title: {
        type: String,
        required: true
        // trim: true
    }, 
    completed: {
        type: Boolean,
        default: false
    }
});

//definition de notre model à enregistrer
export const Post = mongoose.model('Post', postschema);


