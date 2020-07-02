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

express.static( __dirname +'./task-manager/src')
express.static(  __dirname +'./task-manage/views')    




app.use(express.static(  __dirname +'./task-manager/src'))
app.use(express.static(  __dirname +'./task-manager/views'))

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)




app.set('view engine', 'hbs')
app.engine( 'hbs', hbs({extname: '.hbs', layoutsDir: './views/pages', partialsDir: './views/partials'}));


app.get('/',(req, res )=>{
    // res.send('helloooooooooo')
    // res.sendFile(__dirname + '/main.hbs' )
    res.render('../views/pages/index')
})

app.get('/index.hbs', (req, res)=>{
   res.render('index')

})



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


