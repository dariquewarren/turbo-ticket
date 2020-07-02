const userRouter = require('./routers/user')
const taskRouter = require('./routers/tasks')
const Task = require('./models/task')
const User = require('./models/user')
const hbs = require('express-handlebars')
const express = require('express')
require('./db/mongoose')
const app = express()
const port = process.env.PORT || 3000

const path = require('path')
const auth = require('./middleware/auth')
const router = new express.Router()

express.static(__dirname + '../public')



app.engine( 'hbs', hbs( {
    extname: '.hbs',
    defaultView: 'default',
    layoutsDir: __dirname + '/views/pages/',
    partialsDir: __dirname + '/views/partials/'
  }));


app.set('view engine', 'hbs')




router.get('/', function (req, res) {
    
    res.sendFile(path.join(__dirname, 'index.html'));
  })

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


