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

    let emptyFields = []

    if(!title){
        emptyFields.push('title')
    }
    if(!load){
        emptyFields.push('load')
    }
    if(!reps){
        emptyFields.push('reps')
    }
    if(emptyFields.length > 0){
        return res.status(400).json({error: 'Please fill in all the fields', emptyFields})
    }

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

    const workout = await Workout.findOneAndDelete({_id: id})

    if(!workout){
        return res.status(400).json({error : ' no any workout'})
    }

    res.status(200).json(workout)

    
}
//update a workout

const updateworkout = async(req , res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error : ' no any workout'})
    }

    const workout = await Workout.findByIdAndUpdate({_id: id},
        {...req.body})
        //whatever in the req body will give for an update
    
     if(!workout){
        return res.status(400).json({error : ' no any workout'}) 
      }
    
     res.status(200).json(workout)

}

module.exports = {
    createworkout,
    getaworkout,
    getworkouts,
    deleteworkout,
    updateworkout
}