// CRUD CREATE READ UPDATE DELETE

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const {MongoClient, ObjectID} = require('mongodb')

const id = new ObjectID()

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'



MongoClient.connect(connectionUrl, {useNewUrlParser: true}  , (error, client)=>{
if (error){
    return console.log('no db connect')
}

  const db = client.db(databaseName)
// db.collection('users').findOne({_id: new ObjectID('5edfa5bffd3b2918e087b265')}, (error, user)=>{
// if(error) {
//     console.log('user error')
// }

// console.log(user)
// })

// db.collection('users').find({age: 31}).count((error, count)=>{
//     console.log(count)
// })

/*
GOAL 
USE FIND AND FIND ONE WITH TASKS
1. USE FIND ONE TO FETCH THE LAST TASK BY ID. PRINT TO CONSOLE
2. USE FIND TO FETCH ALL TASLS THAT ARE NOT COMPLETED
3. TEST YOUR WORK!

*/

db.collection('tasks').findOne({_id: new ObjectID("5edfa9e104c6c335b46acfc3")}, (error, task) =>{
if (error){
    console.log('unable to fetch task')
}
    console.log(task)
})

db.collection('tasks').find({completed: false}, (error, task)=>{
    if(error) {
      console.log('unable to fetch')  
    }

console.log(task)

})


})