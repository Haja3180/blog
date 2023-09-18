//post model
import mongoose from 'mongoose';

const postschema = new mongoose.Schema({
    post_title: {
        type: String,
        required: true
        // trim: true
    }, 
    post_author: {
        type: String,
        required: true
    },
    post_likers: {
        type: [String]
    }
});

//definition de notre model à enregistrer
export const Post = mongoose.model('Post', postschema);


