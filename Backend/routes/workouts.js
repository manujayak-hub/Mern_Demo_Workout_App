const express = require('express')

const router = express.Router()

//get all workout
router.get('/' , (req , res) => {
    res.json({mssg: 'Get all Workout'})
})

//get a single workout
router.get('/:id' , (req , res) => {
    res.json({mssg: 'Get a single Workout'})
})

//post a workout
router.post('/' , (req , res) => {
    res.json({mssg: 'post a new Workout'})
})

//delete a workout
router.delete('/:id' , (req , res) => {
    res.json({mssg: 'delete a Workout'})
})

//update a workout
router.patch('/' , (req , res) => {
    res.json({mssg: 'update a Workout'})
})

//here we export the router module and this will get it as a require
// in server.js
module.exports = router