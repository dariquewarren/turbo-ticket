const express = require('express')
const Tasks =  require('../models/task')
const router = new express.Router()



router.post('/tasks', async (req, res)=>{
    const task = new Tasks(req.body)
   
    try{
await task.save()
res.status(201).send(task)
   }catch(e){
    res.status(400).send(e)
   }
   
})



router.get('/tasks', async (req,res)=>{
    
    try{
const task = await Tasks.find({})
res.status(200).send(task)
    }catch(e){
        res.status(500).send(e)
    }
    
})

router.get('/tasks/:id', async (req,res)=>{
    const _id = req.params.id

    try{
const task = await Tasks.findById(_id)
res.status(201).send(task)
    }catch(e){
        res.status(404).send(e)
    }
    
})




router.patch('/tasks/:id', async (req, res)=>{
 const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
const isValid = updates.every((update)=>{
    return allowedUpdates.includes(update)
})
 if(!isValid){
  return   res.status(404).send({error:'INVALID KEY/VALUE PAIR'})

 }
    try{
      
const task = await Tasks.findByIdAndUpdate(req.params.id)




updates.forEach((update)=> task[update] = req.body[update])
await task.save()

if(!task){
 return   res.status(404).send('NO TASK FOUND')
}
res.send(task)
    }catch(e){
        res.status(400).send(e)
    }
})




router.delete('/tasks/:id', async (req, res)=>{
    try{
const task = await Tasks.findByIdAndDelete(req.params.id)
if(!task){
  return  res.status(404).send()
}
res.send(task)
    }catch(e){
res.status(400).send(e)
    }
})





module.exports = router