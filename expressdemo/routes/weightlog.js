const express = require('express');
const router = express.Router();
const WeightLog = require('../models/weightlog')

const {
    getWeightLogs,
    createWeight
} = require('../controllers/weightlog');

const advancedResults = require('../middleware/advancedResults');
const { protect, authorize } = require('../middleware/auth');

router.route('/')
    .get(protect, authorize('user', 'trainer', 'admin') , advancedResults(WeightLog, {path:'user', select:'name'}), getWeightLogs)
    .post(protect, createWeight)


module.exports = router;