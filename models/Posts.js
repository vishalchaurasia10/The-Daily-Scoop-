const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    tags:{
        type: String,
        required: true,
    },
    author:{
        type: String,
        required: true,
    },
    preview:{
        type: String,
        required: true,
    },
    slug:{
        type: String,
        required: true,
    },
    content:{
        type: String,
        required: true,
    },
} , { timestamps: true})

module.exports = mongoose.model('Posts', PostSchema)