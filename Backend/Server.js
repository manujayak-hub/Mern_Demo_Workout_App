require('dotenv').config()

const express = require ('express')

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

//listen for app
app.listen(process.env.PORT , () => {
    console.log(" Listning on Port ")
})