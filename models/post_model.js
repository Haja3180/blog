//post model
import mongoose from 'mongoose';

const postschema = new mongoose.Schema(
    {
        post_title: {
            type: String,
            required: true
        }, 

        post_author: {
            type: String,
            required: true
        },

        post_content: {
            type: String,
            required : false
        },

        post_likers: {
            type: [String]
        }
    },
    {
        timestamps: true
    }
    );

//definition de notre model à enregistrer
export const Post = mongoose.model('Post', postschema);


