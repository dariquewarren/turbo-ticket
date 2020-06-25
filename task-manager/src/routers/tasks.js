const express = require('express')
const Tasks =  require('../models/task')
const auth = require('../middleware/auth')
const router = new express.Router()



router.post('/tasks', auth, async (req, res)=>{
    // const task = new Tasks(req.body)
   const task = new Tasks({
       ...req.body,
       owner: req.user._id
    })

    try{
await task.save()
res.status(201).send(task)
   }catch(e){
    res.status(400).send(e)
   }
   
})
/*
GOAL: REFACTOR GET/TASKS
0. ADD AUTHENTICATION
1. RETURN TASKS ONLY FOR THE AUTHENTICATED USER
2. TEST YOUR WORK


 */


router.get('/tasks', auth, async (req,res)=>{
    
    try{
        
const task = await Tasks.find({owner: req.user._id})
if(!task){
res.status(404).send()
        }
res.status(200).send(task)
    }catch(e){
        res.status(500).send(e)
    }
    
})

router.get('/tasks/:id', auth, async (req, res)=>{
    const _id = req.params.id

    try{

const task = await Tasks.findOne({_id:req.params.id, owner: req.user._id})

if(!task) {
    res.status(404).send()
}
res.send(task)
    }catch(e){
        res.status(500).send()
    }
    
})




router.patch('/tasks/:id', auth, async (req, res)=>{
const updates = Object.keys(req.body)
const allowedUpdates = ['description', 'completed']
const isValid = updates.every((update)=>{
    return allowedUpdates.includes(update)
})
 if(!isValid){
  return   res.status(404).send({error:'INVALID KEY/VALUE PAIR'})

 }
    try{
   const task = await Tasks.findOne({ _id:req.params.id, owner:req.user._id}) 

if(!task){
 return   res.status(404).send('NO TASK FOUND')
}

updates.forEach((update)=> task[update] = req.body[update])
await task.save()

res.send(task)
    }catch(e){
        res.status(400).send(e)
    }
})




router.delete('/tasks/:id', auth,async (req, res)=>{
    try{
const task = await Tasks.findOneAndDelete({_id: req.params.id, owner: req.user._id})
if(!task){
  return  res.status(404).send()
}
res.send(task)
    }catch(e){
res.status(400).send(e)
    }
})





module.exports = router