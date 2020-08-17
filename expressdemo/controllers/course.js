var courses = [
    {title: 'Angular', summary: 'UI framework from Google!'},
    {title: 'React', summary: 'UI library from Facebook!'}
]

// @desc Get All Courses
// @route /api/v1/courses
// @access public
exports.getCourses = (req, res, next) => {
    res.status(200).json(courses)
}

// @desc Create A Courses
// @route /api/v1/courses
// @access public
exports.createCourse = (req, res, next) => {
    console.log(req.body)
    // Read the data from req.body

    // adding data to coursess array
    courses.push(req.body);

    //respond to client
    res.status(201).json(courses);
}

// @desc Delete A Course
// @route /api/v1/courses/:title
// @access public
exports.deleteCourse = (req, res, next) => {
    console.log(req.params.title)
    const deletedCourse = courses.find(course => course.title === req.params.title)
    if(deletedCourse){
        courses = courses.filter(course=> course.title !==  req.params.title)
        res.status(200).json(deletedCourse)
    }
    else{
        res.status(404).json({"message": "Course Not Found"})
    }
}


// @desc Update A Course
// @route /api/v1/courses
// @access public
exports.updateCourse = (req, res, next) => {
    let updatedCourse;
     courses = courses.map(course=> {
         if(course.title === req.body.title){
            updatedCourse = { ...course, ...req.body} 
            return updatedCourse;
         }
         return course;
     })
     if(updatedCourse){
        res.status(200).json(courses)
     }
     else{
        res.status(404).json({message: "Course to be updated was not found!!"})
     }
}