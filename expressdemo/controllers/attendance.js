const Attendance = require('../models/attendance');
const ErrorResponse = require('../middleware/ErrorResponse');
const asyncHandler = require('../middleware/async');

// @desc Create A Attendance Log
// @route /api/v1/attendance
// @access public
exports.logIn = asyncHandler(async (req, res, next) => {
    console.log(req.body)

        const attendance = await Attendance.create(req.body)

        res.status(201).json({
            success: true,
            data: attendance
        });
    
}) 

// @desc Update A Attendance Log
// @route /api/v1/attendance
// @access public
exports.logOut = asyncHandler(async (req, res, next) => {
    console.log(req.body)

        const attendance = await Attendance.findOneAndUpdate({user: req.user.id, status:'loggedIn'}, {logOut: new Date(), status:'completed'}, {
            new: true,
            runValidators: true
        })

        res.status(200).json({
            success: true,
            data: attendance
        });
    
}) 
// @desc Get All Attendance Logs
// @route /api/v1/attendance
// @access public
exports.getAttendanceLogs = asyncHandler(async (req, res, next) => {
    res.status(200).json(res.advancedResults);

})


// // @desc Get All Workouts
// // @route /api/v1/workouts/:id
// // @access public
// exports.getWorkout = asyncHandler(async (req, res, next) => {
//     // console.log(req.body)
//     // Find all workouts
  
//         const workOut = await WorkoutSchedule.findById(req.params.id)
//         if(!workOut) throw new ErrorResponse(`Workout id: ${req.params.id} not found`, 404)
//         res.status(200).json({
//             success: true,
//             data: workOut
//         });

    
// })

// // @desc Update A Workouts
// // @route /api/v1/workouts/:id
// // @access public
// exports.updateWorkout = asyncHandler(async (req, res, next) => {
//     // console.log(req.body)
//     // Find all workouts

//         const workOut = await WorkoutSchedule.findByIdAndUpdate(req.params.id, req.body, {
//             new: true,
//             runValidators: true
//         })
//         if(!workOut) throw new Error(`Workout id: ${req.params.id} not found`)
//         res.status(200).json({
//             success: true,
//             data: workOut
//         });
  
   
    
// })



// // @desc Delete A Workout
// // @route /api/v1/workouts/:id
// // @access public
// exports.deleteWorkout = asyncHandler(async (req, res, next) => {
//     // console.log(req.body)
//     // Find all workouts
//         const workOut = await WorkoutSchedule.findByIdAndDelete(req.params.id)
//         if(!workOut) throw new Error(`Workout id: ${req.params.id} not found`)
//         res.status(204).json({
//             success: true,
//             // data: workOut
//         });

    
// })