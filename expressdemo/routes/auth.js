const express = require('express');
const router = express.Router();
const Workout = require('../models/workout')

const {
    register,
    login,
    profile
} = require('../controllers/auth');

const advancedResults = require('../middleware/advancedResults');
const { protect } = require('../middleware/auth');


router.post('/register', register)
router.post('/login', login)
router.get('/profile', protect, profile)


module.exports = router;