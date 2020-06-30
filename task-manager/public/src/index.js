const userRouter = require('./routers/user')
const taskRouter = require('./routers/tasks')
const Task = require('./models/task')
const User = require('./models/user')

const express = require('express')
require('./db/mongoose')
const app = express()
const port = process.env.PORT || 3000



app.use(express.json())
app.use(userRouter)
app.use(taskRouter)





app.listen(port, ()=>{
    console.log('Server is up on port ' + port)
})



 const main = async ()=>{
    //  const task = await Task.findById('5ef80ec2fe11913240ef03c7')
    //  await task.populate('owner').execPopulate()
    //  console.log(task.owner)

    const user = await User.findById('5ef8bf9ec335282c789c01f4')
    await user.populate('tasks').execPopulate()


    console.log(user.tasks)
    
    
 }

 main()