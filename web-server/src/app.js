const express = require('express')

const app = express()

app.get('', (req, res)=> {
    res.send('Hello express!')
})

app.get('/help', (req, res)=>{
    res.send('Help page')
})

app.get('/about', (req, res)=>{
    res.send('About our team')
})
 app.get('/weather', (req, res)=>{
    res.send('Current Weather')
 })


// goal: setup two new routes
// 1. setup an about route and render a page title
// 2. setup a weather route and render a page title
// 3. test your work by visiting both in the browser

// app.com
// app.com/help
// app.com/about

app.listen(3000, ()=>{
    console.log('server is up on port 3000')
})