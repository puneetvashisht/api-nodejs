const mongoose = require('mongoose');

const WorkoutSchema = new mongoose.Schema({

    title: {
        type: String,
        // unique : true,
        required: [true, 'Please provide a title']
    },
    note: {
        type: String,
        required: [true, 'Please provide a note']
    },
    cbpm: {
        type: Number
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

})

module.exports = WorkoutSchema