const express = require('express');
const router = express.Router();
const Workout = require('../models/workout')

const {
    createWorkout,
    getWorkouts,
    getWorkout,
    updateWorkout,
    deleteWorkout
} = require('../controllers/workout');

const advancedResults = require('../middleware/advancedResults');


router.route('/')
    .get(advancedResults(Workout), getWorkouts)
    .post(createWorkout)

router.route('/:id')
    .get(getWorkout)
    .put(updateWorkout)
    .delete(deleteWorkout)

module.exports = router;