// Assignment

// You need to create a4 routes(4 Things that the hospital can do)
// 1. Get - User can check how many kidneys they have and their health
// 2. Post - User can add a new kidney
// 3. Put - User can replace a kidney, make it healthy
// Delete - User can remove a kidney

const express = require('express');
const app = express();

const users = [{
    name: "Abhi",
    kidneys: [{
        healthy: false
    }]
}];

//middleware for post request
app.use(express.json());

//for get requests
//query parameters
//filter in JS
app.get("/", function (req, res) {
    const abhiKidneys = users[0].kidneys;
    const numberOfKidneys = abhiKidneys.length;
    let numberOfHealthyKidneys = 0;
    for (let i = 0; i < numberOfKidneys; i++) {
        if (abhiKidneys[i].healthy) {
            numberOfHealthyKidneys += 1;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    });
});

//send data in body
app.post("/", function (req, res) {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({ 
        msg: "Done !"
    })
})

//411
app.put("/", function (req, res) {
    if (isThereAtleastOneUnhealthyKidney()) {   
        for (let i = 0; i < users[0].kidneys.length; i++) {
            users[0].kidneys[i].healthy = true;
        }
        res.json({ msg: "Done !" })
    }
    else {
        res.status(411).json({
            msg:"No Bad kidney found !!!!!!!!!!!"
        })
    }
})

app.delete("/", function (req, res) {
    if (isThereAtleastOneUnhealthyKidney()) {
        let newKidneys = [];
        for (let i = 0; i < users[0].kidneys.length;i++){
            if (users[0].kidneys[i].healthy) {
                newKidneys.push({
                    healthy:'true'
                })
            }
        }
        users[0].kidneys = newKidneys;
        res.json({
            msg:"Done !!!!"
        })
    }
    else {
        res.status(411).json({
            msg:"No kidney found !!!!!!!!!!!"
        })
    }
})

function isThereAtleastOneUnhealthyKidney() {
    let atLeastOneUnhealthyKidney = false;
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (!users[0].kidneys[i].healthy) {
            atLeastOneUnhealthyKidney = true;
        }
    }
    return atLeastOneUnhealthyKidney;
}

app.listen(3005);