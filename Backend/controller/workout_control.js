const Workout = require ('../models/workout_model')
const mongoose = require('mongoose')

//get all workout
const getworkouts = async(req , res) => {
    
    const workout = await Workout.find({}).sort({createdAt:-1})
    res.status(200).json(workout)
       
}

//get a single workout

const getaworkout = async(req , res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error : ' no any workout'})
    }
    
    const workout = await Workout.findById(id)

    if(!workout){
        return res.status(404).json({error : ' no any workout'})
    }

    res.status(200).json(workout)
}

//create new workout
const createworkout =async( req , res) => {
    const {title ,load , reps} = req.body

    //add workout to db
    try{
            const workout = await Workout.create({title ,load , reps})
            res.status(200).json(workout)
    }
    catch(error){
        res.status(400).json({error : error.message})
    }
    
}

//delete a workout
const deleteworkout = async(req , res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error : ' no any workout'})
    }

    
    
}
//update a workout

module.exports = {
    createworkout,
    getaworkout,
    getworkouts
}