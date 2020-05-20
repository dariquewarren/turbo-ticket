const path = require('path')
const express = require('express')
const hbs =require('hbs')
const app = express()

//DEFINE PATHS FOR EXPRESS CONFIG
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')
// SETS UP HANDLEBARS ENGINE AND VIEWS LOCATION

app.set('view engine','hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)
// SETUP STATIC DIRECTORY TO SERVE
app.use(express.static(publicDirectoryPath))

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



app.get('/help', (req, res)=>{
res.render('help', {
    helpMessage: 'These are not the droids you are looking for',
    title:'Help',
    name: 'Darique Warren'
})
})


app.get('/weather', (req, res)=>{
    res.send( {
        forecast: 'It is weather',
        location: 'It is here'
    })
 })


/* 
GOAL: CREATE A PARTIAL FOR THE FOOTER
1. SETUP THE TEMPLATE FOR THE FOOTER PARTIAL "CREATED BY SOME NAME"
2. RENDER THE PARTUAL AT THE BOTTOM OF ALL THREE PAGES
3. TEST YOUR WORK BY VISITING ALL THREE PAGES

*/ 


app.listen(3000, ()=>{
    console.log('server is up on port 3000')
})