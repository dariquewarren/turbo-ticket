const express = require('express')

const app = express()
// uses express' get method to send a response to the page specified by quotes.
// empty quotes seems to mean root folder of 
// res.send sends whatever it's called with to the page specified by the function
app.get('', (req, res)=> {
    res.send('<h1>Weather</h1>')
})

app.get('/help', (req, res)=>{
    res.send([{
        name: 'darique',
        age: 31
    }] )
})


/* 

GOAL: UPDATE ROUTES

1. SETUP ABOUT ROUTE TO RENDER A TITLE WITH HTML
2. SETUP A WEATHER ROUTE TO SEND BACK json
    - OBJECT WITH FORECAST AND LOCATION STRINGS
3. TEST YOUR WORK BY VISITING BOTH IN THE BROWSER

*/
app.get('/about', (req, res)=>{
    res.send('<h3>ABOUT OUR TEAM<h3>')
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