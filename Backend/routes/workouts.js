const express = require('express')

const { createworkout,
    getaworkout,
    getworkouts} = require('../controller/workout_control')

const router = express.Router()

//get all workout
router.get('/' ,getworkouts )

//get a single workout
router.get('/:id' ,getaworkout)

//post a workout
router.post('/',createworkout)

//delete a workout
router.delete('/:id' , (req , res) => {
    res.json({mssg: 'delete a Workout'})
})

//update a workout
router.patch('/:id' , (req , res) => {
    res.json({mssg: 'update a Workout'})
})

//here we export the router module and this will get it as a require
// in server.js
module.exports = router