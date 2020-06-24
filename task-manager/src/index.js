const express = require('express')
require('./db/mongoose')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/tasks')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next)=>{
//   if(req.method === 'GET'){
// res.send('GET requests are disabled')
//   }else {
//       next()
//   }
// })

// app.use((req, res, next)=>{

// res.status(503).send('Out for Maintenance')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, ()=>{
    console.log('Server is up on port ' + port)
})

const jwt = require('jsonwebtoken')

const myFunction = async ()=>{
const token = jwt.sign({_id:'12323'}, 'thisaseriesofcharacters', {expiresIn: '7 days'})
const data = jwt.verify(token,'thisaseriesofcharacters')

console.log(token)
console.log(data)
}

const pet = {
    name: 'jack'
}

pet.toJSON = function () {
    console.log(this)
    return this
}

console.log(JSON.stringify(pet))