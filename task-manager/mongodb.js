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
  db.collection('users').insertOne({
      name: 'Darique',
      age: 31
  })

  db.collection('users').insertOne({
      occupation: 'Emcee',
      alias: 'Delta Bravo'
  })
})