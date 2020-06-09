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




db.collection('tasks').insertMany([{
    description: 'learn MongoDB',
    completed: true
}, {
    description: 'Conquer Day',
    completed: true 
}, {
    description: 'learn humility',
    completed: false
}],  (error, result)=>{
    if (error){
     return   console.log('something wicked this way comes')
    }

console.log(result.ops)

})

*/

})