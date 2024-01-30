const { Router } = require("express");
const mongoose = require('mongoose')
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    
    const username = req.body.username;
    const password = req.body.password;

    // Implement user signup logic
    if (await User.findOne({ username: username })) {
        res.status(403).json({
            msg:"Username already Exist, try another username !"
        })
    }else{
        await User.create({
            username:username,
            password:password
        })
        res.json({
            msg:"User created successfully"
        })
    }
});

router.get('/courses',async (req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find({});
    // console.log(courses);
    res.json({
        course:courses
    })
});

router.post('/courses/:courseId', userMiddleware,async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username=req.headers.username

    
    await User.updateOne({
        username:username
    },
    {
        "$push":{
            purchasedCourses: courseId
        }
    })
    res.json({
        message: 'Course purchased successfully' 
    })
});

router.get('/purchasedCourses', userMiddleware,async (req, res) => {
    // Implement fetching purchased courses logic

    const username = req.headers.username;
    
    let user = await User.findOne({
        username:username
    })
    
    console.log(user.purchasedCourses);

    const course = await Course.find({
        _id: {
            "$in":user.purchasedCourses
        }
    })

    res.json({
        Courses:course
    })

});

module.exports = router