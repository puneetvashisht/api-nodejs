const express = require('express');
const router = express.Router();
const Attendance = require('../models/attendance')

const {
    logIn,
    logOut,
    getAttendanceLogs
} = require('../controllers/attendance');

const advancedResults = require('../middleware/advancedResults');
const { protect, authorize } = require('../middleware/auth');

router.route('/')
    .get(protect, authorize('user', 'trainer', 'admin') , advancedResults(Attendance), getAttendanceLogs)
    .post(protect, logIn)
    .put(protect, logOut)


module.exports = router;