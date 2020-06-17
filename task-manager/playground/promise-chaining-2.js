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

// Task.findByIdAndDelete("5ee8279a1124db1e7873376f").then(()=>{
// return Task.find({completed: false})
// }).then((incompletes)=>{
//     console.log(incompletes)
// }).catch((e)=>{
//     console.log(e)
// })





/*

GOAL USE ASYNC/AWAIT
1. CREATE DELETETASKANDCOUNT AS AN ASNC FUNCTION
    -ACCEPT ID OF TASK TO REMOVE
2. USE AWAIT TO DELETE TASK AND COUNT INCOMPLETE TASKS
3. RETURN THE COUNT
4. CALL THE FUNCTION AND USE THEN/CATCH TO LOG RESULTS
TEST YOUR WORK

*/

const deleteTaskAndCount = async (id)=>{
const task = await Task.findByIdAndDelete(id)
const count = await Task.countDocuments({completed: false})
return count
}

deleteTaskAndCount("5ee79004f02e8b2d3883c7b8").then((count)=>{console.log(count)}).catch((e)=>{
    console.log(e)
})

// Task.findOneAndUpdate({description: 'Be awesome', completed:false},{completed: true}).then(()=>{
// return Task.find({completed: true})
// }).then((completes)=>{
// console.log(completes)
// }).catch((e)=>{
// console.log(e)
// })