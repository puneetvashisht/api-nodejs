const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema({

    logIn: {
        type: Date,
        default: Date.now
    },
    logOut: {
        type: Date 
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true,
    }, 
    status: {
        type: String,
        enum: ['loggedIn', 'completed'],
        default: 'loggedIn'
    }

})

module.exports = mongoose.model('Attendance', AttendanceSchema)