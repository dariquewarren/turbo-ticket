const path = require('path')
const express = require('express')
const User = require('../models/user')
const auth = require('../middleware/auth')
const router = new express.Router()
const hbs = require('express-handlebars')
const app = express( )

express.static(__dirname + '../public')



app.engine( 'hbs', hbs( {
    extname: '.hbs',
    defaultView: 'default',
    layoutsDir: __dirname + '/views/pages/',
    partialsDir: __dirname + '/views/partials/'
  }));


app.set('view engine', 'hbs')




router.get('/', function (req, res) {
    
    res.sendFile(path.join(__dirname, 'index1.html'));
  })

router.post('/users', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/users', auth, async (req,res)=>{
    
    try{
        
const user = await User.findById({})
if(!user){
res.status(404).send()
        }
res.status(200).send(user)
    }catch(e){
        res.status(500).send(e)
    }
    
})

router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({ user, token })
    } catch (e) {
        res.status(400).send()
    }
})

router.post('/users/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save()

        res.send()
    } catch (e) {
        res.status(500).send()
    }
})





router.post('/users/logoutAll', auth, async (req, res) => {
    try {
    req.user.tokens = []
    await req.user.save()
    res.send()

    } catch(e){
res.status(500).send()
    }
})


router.get('/users/me', auth, async (req, res) => {
    res.send(req.user)
})


/*

GOAL REFACTOR THE UPDATE PROFILE ROUTE HANDLER

1. UPDATE THE URL TO USERS/ME
2. ADD THE AUTHENTICATION MIDDLEMARE INTO THE MIX
3. USE THE EXISTING USER DOCUMENT INSTEAD OF USING PARM.ID
4. TEST YOUR WORK IN POSTMAN

*/

router.patch('/users/me', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        

        updates.forEach((update) => req.user[update] = req.body[update])
        await req.user.save()
        res.send(req.user)
        if (!user) {
            return res.status(404).send()
        }

        res.send(req.user)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/users/me', auth, async (req, res) => {
    try {
        
await req.user.remove()
        res.send(req.user)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router