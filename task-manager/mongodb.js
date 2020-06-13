// CRUD CREATE READ UPDATE DELETE

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID


// destructured mongodb! what excitement!
const {MongoClient, ObjectID, DBRef} = require('mongodb')

const id = new ObjectID()

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'



MongoClient.connect(connectionUrl, {useNewUrlParser: true}  , (error, client)=>{
if (error){
    return console.log('no db connect')
}

  const db = client.db(databaseName)
// db.collection('users').deleteMany({age: 25}).then((result)=>{
// console.log(result)
// }).catch((error)=>{
//     console.log(error)
// })


/*
GOAL: USE DELETEoNE TO REMOVE A TASK
1. GRAB THE DESCRIPTION FOR THE TASK YOU WANT TO REMOVE
2. SETUP THE CALL WITH THE QUERY
3. USE PROMISE METHOD TO SET UP SUCCESS/FAILURE HANDLERS
4. TEST YOUR WORK

 */

//  db.collection('users').updateOne({name: "Darique"}, {$set: {
//     age: 32
// }}).then((result)=>{
//      console.log(result)
//  }).catch((error)=>{
//      console.log(error)
//  })

// CREATE 
// db.collection('members').insertOne({name: 'Darique Warren', rank:'Senior', privilege: 'medium'}).then((result)=>{
// console.log(result)
// }).catch((error)=>{
// console.log(error)
// })

// READ
// db.collection('members').findOne({_id: ObjectID("5ee2bd4a84a5da21f4c51a70")}).then((result)=>{console.log(result)
// }).catch((error)=>{
//     console.log(error)
// })


// UPDATE
// db.collection('members').updateOne({
// name: 'Darique Warren',

// },{ $set: {
//     name: 'Uncouth Jesus',
//     rank: 'Not Applicable',
//     privilege: 'Low'
// }}).then((result)=>{
// console.log(result)
// }).catch((error)=>{
// console.log(error)
// })
// })


//  DELETE
//  db.collection('members').deleteOne({name: 'Darique Warren'}).then((result)=>{console.log(result)
// }).catch((error)=>{console.log(error)
// })



})
