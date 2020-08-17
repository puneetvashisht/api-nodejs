const mongoose = require('mongoose');
const WorkoutSchema = require('./workoutschema');

module.exports = mongoose.model('Workout', WorkoutSchema);