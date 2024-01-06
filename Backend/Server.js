require('dotenv').config()

const express = require ('express')
const mongoose = require('mongoose')

//taking router module which that exported
const workoutrouter = require('./routes/workouts')

//express app
const app = express()

//middleware

app.use(express.json())

app.use((req , res , next) => {
    console.log(req.path,req.method)
    next()
})
//routes
app.use('/api/workouts',workoutrouter)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        //listen for app
        app.listen(process.env.PORT , () => {
            console.log(" Db connected & Listning on Port ")
        })
    })
    .catch((error) => {
        console.log(error)
    })

