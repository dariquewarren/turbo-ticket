const express = require('express')
require('./db/mongoose')
const User = require('./models/user') 
const Tasks = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/tasks')

const app = express()
const port = process.env.PORT || 3000

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
myFunction()