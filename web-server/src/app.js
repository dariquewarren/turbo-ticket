const path = require('path')
const express = require('express')

// turns expressfunction into a usable variable
const app = express()


// creates a variable that represents file path FOR OUBLIC DIRECTORY
const publicDirectoryPath = path.join(__dirname, '../public')


// loads static page via the exoress method 'get' and exoress method 'static'
app.use(express.static(publicDirectoryPath))

app.set('view engine','hbs')

app.get('', (req, res)=>{
    res.render('index', {
        title: 'Weather',
        name: 'Darique Warren'
    })
})

app.get('/about', (req, res)=>{
    res.render('about', {
        title: 'About Me',
        name: 'Darique Warren'
    })
})

/* 
GOAL: CREATE A TEMPLATE FOR HELP PAGE

1. SETUP A HELP TEMPLATE TO RENDER A HELP MESSAGE TO THE SCREEN 
2. SETUP THE HELP ROUTE AND RENDER THE TEMPLATE WITH AN EXAMPLE MESSAGE
3. VISIT THE ROUTE IN THE BROWSER AND SEE YOUR HELP MESSAGE PRINT

*/

app.get('/help', (req, res)=>{
res.render('help', {
    title:'HEEEEEEELLLLLLPPPP IS BELOW',
    helpMessage: 'These are not the droids you are looking for'
})
})


app.get('/weather', (req, res)=>{
    res.send( {
        forecast: 'It is weather',
        location: 'It is here'
    })
 })




app.listen(3000, ()=>{
    console.log('server is up on port 3000')
})