const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

mongoose.connect('mongodb+srv://harishm-99:7SfldfRRPKIHbdd8@cluster0.z30flns.mongodb.net/')

const User = mongoose.model('Users', {
    name: String,
    email: String,
    password: String
})

app.post('/signup', async function (req, res) {
    
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const userExists = await User.findOne({email:username})
    // findone => matching the inputs with the record in db with the same format, There are many other fns provided by mongodb like user.update,user.delete
    if (userExists) {
        //CRUD operations => Create, Read, Update, Delete
        return res.status(403).json({
            msg:"Username already exists !"
        })
    }
    const user = new User({
        name: name,
        email: username,
        password: password
    })
    
    user.save().then(() => console.log("meow"));
    res.json({
        msg:"User created successfully"
    })
})

app.listen(3001);