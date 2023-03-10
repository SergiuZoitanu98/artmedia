const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require("mongoose")
require('dotenv').config()
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
const corsOption ={
    origin:["http://localhost:3000"]
    }
db.on('error',(error)=>console.error(error))
db.once('open',()=>console.info('Connected to database'))




const postRouter = require('./routes/artmedia/posts')
const userRouter = require('./routes/artmedia/users')
app.use(cors(corsOption)); 
app.use(express.json())
app.use('/posts',postRouter)
app.use('/users',userRouter)

app.listen(5000,()=>console.log("server started"))