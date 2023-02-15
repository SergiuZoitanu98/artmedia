const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    createdDate:{
        type:Date,
        required:true,
        default:Date.now
    }
})

module.exports = mongoose.model('post',postSchema)