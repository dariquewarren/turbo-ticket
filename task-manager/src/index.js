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


const Task = require('./models/task')
const User = require('./models/user')
const main = async ()=>{
    // const task = await Task.findById('5ef40052df65f80a900bb7df')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)
const user = await User.findById('5ef40df2476ede3070727e86')
 await user.populate('task').execPopulate()
// console.log(user)
}

main()