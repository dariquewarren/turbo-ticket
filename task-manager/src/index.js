const express = require('express')
require('./db/mongoose')
const User = require('./models/user') 
const Tasks = require('./models/task')
const app = express()

const port = process.env.PORT || 3000

app.use(express.json())


app.post('/users', (req, res)=>{
   const user = new User(req.body)
   user.save().then((user)=>{
res.send(user)
   }).catch((error)=>{
       res.status(400).then(error)
})
})

app.post('/tasks', (req, res)=>{
    const task = new Tasks(req.body)
    task.save().then((task)=>{
        res.send(task)
    }).catch((error)=>{
        res.status(400).then(error)
    })
})
/*
GOAL: SETUP TASK CREATIO ENDPOINT

1.CREATE A SEPERATE FILE FOR THE TASK MODEL(LOAD IT INTO INDEX.JS)
2. CREATE THE TASK CREATION ENDPOINT(HANDLE SUCCESS AND ERROR)
3. TEST YOUR WORK FROM POSTMAN WITH GOOD AND BAD DATA
*/
app.listen(port, ()=>{
    console.log('Server is up on port ' + port)
})
