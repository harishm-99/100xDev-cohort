const { Router } = require("express");
const jwt = require('jsonwebtoken');
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const JWT_SECRET = require("../config");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {

    const username = req.body.username;
    const password = req.body.password;
    
    // Implement admin signup logic    
    if (await Admin.findOne({ username : username })) {
        res.status(403).json({
            msg:"Admin username already exists, Try another one !!!"
        })
    } else {   
        await Admin.create({
            username: username,
            password: password
        })
        res.json({
            message: 'Admin created successfully'
        });
    }
});

router.post('/signin',async (req, res) => {
    // Implement admin signup logic
    const username = req.headers.username;
    const password = req.headers.password;

    if (await Admin.find({
        username: username,
        password: password
    })) {
        const token = jwt.sign({ username }, JWT_SECRET);
        res.json({
            token
        })
    } else {
        res.json({
            msg:"User doesn't exists"
        })
    }
});

router.post('/courses', adminMiddleware,async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;

    const newCourse = await Course.create({
        title: title,
        desciption: description,
        imageLink: imageLink,
        price:price
    })
    
    res.json({
        message: 'Course created successfully',
        courseId: newCourse._id
    })

});

router.get('/courses', adminMiddleware,async (req, res) => {
    // Implement fetching all courses logic

    const course = await Course.find({});
    
    res.json({
        Courses:course
    })
});

module.exports = router;