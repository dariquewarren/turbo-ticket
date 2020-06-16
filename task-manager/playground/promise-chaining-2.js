/*
GOAL: MESS AROUND WITH PROMISE CHAIING

1. CREATE PROMISE-CHAINING-2.JS


2. LOAD IN MONGOOSE AND TASK MODEL
3. REMOVE A GIVEN TASK BY ID
4. GET AND PRINT THE TOTAL NUMBER OF INCOMPLTET TASKS
5. TEST YOUR WORK

*/
require('../src/db/mongoose')
const Task = require('../src/models/task')

// "5ee8279a1124db1e7873376f"

Task.findByIdAndDelete("5ee8279a1124db1e7873376f").then(()=>{
return Task.find({completed: false})
}).then((incompletes)=>{
    console.log(incompletes)
}).catch((e)=>{
    console.log(e)
})

// Task.findOneAndUpdate({description: 'Be awesome', completed:false},{completed: true}).then(()=>{
// return Task.find({completed: true})
// }).then((completes)=>{
// console.log(completes)
// }).catch((e)=>{
// console.log(e)
// })