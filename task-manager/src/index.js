const express = require('express')
require('./db/mongoose')
const User = require('./models/user') 
const Tasks = require('./models/task')
const app = express()

const port = process.env.PORT || 3000

app.use(express.json())

app.post('/users', async (req, res)=>{
   const user = new User(req.body)
   try {
await user.save()
res.status(201).send(user)
   }catch(e){
res.status(400).send(e)
   }
})

app.get('/users', async (req, res)=>{
 try {
  const users =   await User.find({})
res.send(users)
}catch(e){
    res.status(400).send()
}


})

app.get('/users/:id', async (req, res)=>{
    const _id = req.params.id

  try {
 const user = await User.findById(_id)
 if (!user){
     return res.status(404).send()
 }

 res.send(user)
  }catch(e){
res.status(500).send()
  }
  
  

})



app.patch('/users/:id', async (req, res)=>{
    const updates = Object.keys( req.body)
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update)=>{
     return allowedUpdates.includes(update)
    })
    
if(!isValidOperation){
    res.status(400).send({error:'invalid KEY/VALUE PAIR'})
}

    try{
const user = await User.findByIdAndUpdate(req.params.id, req.body, { new:true, runValidators: true})
if (!user){
    return res.status(404).send()
}
res.send(user)
    }catch(e){
res.status(400).send()
    }
})



app.post('/tasks', async (req, res)=>{
    const task = new Tasks(req.body)
   
    try{
await task.save()
res.status(201).send(task)
   }catch(e){
    res.status(400).send(e)
   }
   
})



app.get('/tasks', async (req,res)=>{
    
    try{
const task = await Tasks.find({})
res.status(200).send(task)
    }catch(e){
        res.status(500).send(e)
    }
    
})

app.get('/tasks/:id', async (req,res)=>{
    const _id = req.params.id

    try{
const task = await Tasks.findById(_id)
res.status(201).send(task)
    }catch(e){
        res.status(404).send(e)
    }
    
})


/*
GOAL ALLOW FOR TASK UPDATES

1.SETUP THE ROUTE HANDLER FOR UPDATING
2.SEND ERROR IF UNKNOWN UPDATES
3.ATTEMPT TO UPDATE THE TASK
    -HANDLE TASK NOT FOUND
    -HANDLE VALIDATION ERRORS
    -HANDLE SUCCESS
4.TEST YOUR WORK


*/

app.patch('/tasks/:id', async (req, res)=>{
 const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
const isValid = updates.every((update)=>{
    return allowedUpdates.includes(update)
})
 if(!isValid){
  return   res.status(404).send({error:'INVALID KEY/VALUE PAIR'})

 }
    try{

const task = await Tasks.findByIdAndUpdate(req.params.id, req.body, { new:true, runValidators: true})

if(!task){
 return   res.status(404).send('NO TASK FOUND')
}
res.send(task)
    }catch(e){
        res.status(400).send(e)
    }
})

app.listen(port, ()=>{
    console.log('Server is up on port ' + port)
})
