// CRUD CREATE READ UPDATE DELETE

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionUrl, {useNewUrlParser: true}  , (error, client)=>{
if (error){
    return console.log('no db connect')
}

  const db = client.db(databaseName)
//   db.collection('users').insertOne({
//       name: 'Darique',
//       age: 31
//   }, (error, result)=>{
//     if (error){
//         console.log('unable to insert user')
//     }

//         console.log(result.ops)
// })

// db.collection('users').insertMany([{
//     name: 'jen',
//     age: 25
// }, {
//     name: 'gunther',
//     age: 50
// }],(error, result)=>{
//     if (error){
//         console.log(error)
//     }
//     console.log(result.ops)
// }) 


/*

GOAL: INSERT THREE TASKS INTO A TASK COLLECTION

1. USE INSERTMANY TO INSERT THREE DOCUMENTS
---- DESCRIPTION(STRING) AND COMPLETED(BOOLEAN)

2. SETUP THE CALL BACK TO LOG ERROR OR PRINT OPS
3. RUN THE SCRIPT
4. REFRESH THE DATABASE IN ROBO 3T AND VIEW THE DATA IN TASKS COLLECTION
*/


db.collection('tasks').insertMany([{}, {}], (error, result)=>{
    if (error){
        console.log('something wicked this way comes')
    }


    
})



})