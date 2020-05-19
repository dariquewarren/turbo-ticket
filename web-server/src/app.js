const path = require('path')
const express = require('express')

// turns expressfunction into a usable variable
const app = express()


// creates a variable that represents file path FOR OUBLIC DIRECTORY
const publicDirectoryPath = path.join(__dirname, '../public')


// loads static page via the exoress method 'get' and exoress method 'static'
app.use(express.static(publicDirectoryPath))

app.set('view engine','hbs')


app.get('/weather', (req, res)=>{
    res.send( {
        forecast: 'It is weather',
        location: 'It is here'
    })
 })




app.listen(3000, ()=>{
    console.log('server is up on port 3000')
})