//this one like  creating a table for workout 

const mongoose = require('mongoose')

const Schema =mongoose.Schema

//create new schema as object 
const workoutSchema = new Schema({
    // this one looks like table creation in relational DB
    title: {
        type :String,
        required: true
    },
    reps: {
        type :Number,
        required: true
    },
    load: {
        type :Number,
        required: true
    }
}, {timestamps:true}) 

// timestamps will give  when the workout created or updated

module.exports = mongoose.model('workout', workoutSchema)
