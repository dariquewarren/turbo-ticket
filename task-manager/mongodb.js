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
db.collection('users').findOne({_id: new ObjectID('5edfa5bffd3b2918e087b265')}, (error, user)=>{
if(error) {
    console.log('user error')
}

console.log(user)
})

})