const express = require('express');
const router = express.Router();
const {getCourses,
    createCourse,
    updateCourse,
    deleteCourse
} = require('../controllers/course');


router.route('/')
    .get(getCourses)
    .post(createCourse)
    .put(updateCourse)

router.route('/:title')
    .delete(deleteCourse)


// function isAuthorized(req, res, next){
//     const auth = req.headers.authorization;
//     if(auth=== 'secretpassword'){
//         next();
//     }
//     else{
//         res.status(403)
//         res.send('Not permitted')
//     }
// }





module.exports = router;