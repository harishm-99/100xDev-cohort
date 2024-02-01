const { Router } = require("express");
const jwt = require("jsonwebtoken");
const router = Router();
const { User,Course } = require("../db")
const userMiddleware = require("../middleware/user");
const JWT_SECRET = require("../config");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    User.create({
        username: username,
        password:password
    })
    res.json({
        message: 'User created successfully'
    })
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
    const username = req.headers.username;
    const password = req.headers.password;

    const user = User.find({
        username: username,
        password:password
    })

    if (user) {
        const token = jwt.sign({ username }, JWT_SECRET);
        res.json({
            token:token
        })
    } else {
        res.json({
            msg:"User not authenticated!"
        })
    }
});

router.get('/courses',async (req, res) => {
    // Implement listing all courses logic

    const course = await Course.find({})
    res.json({
        courses:course
    })

});

router.post('/courses/:courseId', userMiddleware,async (req, res) => {
    // Implement course purchase logic
    const username = req.username;  
    const courseid = req.params.courseId;

    await User.updateOne({
        username: username,
        "$push": {
            purchasedCourses: courseid
        }
    })
    res.json({
        message: 'Course purchased successfully'    
    })
});

router.get('/purchasedCourses', userMiddleware,async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.username;

    const user = await User.findOne({
        username: username
    });
    console.log(user.purchasedCourses);

    const course = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    })
    res.json({
        Courses: course
    })

});

module.exports = router