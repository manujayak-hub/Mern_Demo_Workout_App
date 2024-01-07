const express = require('express')

const { createworkout,
    getaworkout,
    getworkouts,
    deleteworkout,
    updateworkout} = require('../controller/workout_control')

const router = express.Router()

//get all workout
router.get('/' ,getworkouts )

//get a single workout
router.get('/:id' ,getaworkout)

//post a workout
router.post('/',createworkout)

//delete a workout
router.delete('/:id' , deleteworkout)

//update a workout
router.patch('/:id' , updateworkout)

//here we export the router module and this will get it as a require
// in server.js
module.exports = router