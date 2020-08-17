const mongoose = require('mongoose');
const WorkoutSchema = require('./workoutschema');
const WorkoutScheduleSchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, 'Please provide a title']
    },
    daysOfWeek: [String],
    workouts: [WorkoutSchema],
    startDate: {
        type: Date,
        default: Date.now
    },
    endDate: {
        type: Date
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true,
    },  
    active: Boolean,
    createdAt: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('WorkoutSchedule', WorkoutScheduleSchema);