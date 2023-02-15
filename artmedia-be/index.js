const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require("mongoose")
require('dotenv').config()
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error',(error)=>console.error(error))
db.once('open',()=>console.info('Connected to database'))

app.use(cors());
app.use(express.json())

const postRouter = require('./routes/artmedia/posts')
const userRouter = require('./routes/artmedia/users')
app.use('/posts',postRouter)
app.use('/users',userRouter)
app.listen(5000,()=>console.log("server started"))