const express = require('express');
const router = express.Router();
const WorkoutScehdule = require('../models/workoutschedule')

const {
    createWorkoutSchedule,
    getWorkoutSchedules
} = require('../controllers/workoutschedule');

const advancedResults = require('../middleware/advancedResults');
const { protect, authorize } = require('../middleware/auth');

router.route('/')
    .get(protect, advancedResults(WorkoutScehdule), getWorkoutSchedules)
    .post(protect, authorize('trainer', 'admin'), createWorkoutSchedule)


module.exports = router;