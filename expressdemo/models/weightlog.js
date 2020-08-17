const mongoose = require('mongoose');

const WeightLogSchema = new mongoose.Schema({

    weight: {
        type: Number,
        required: [true, 'Please provide a weight']
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true,
    }, 
    createdAt: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('WeightLog', WeightLogSchema)