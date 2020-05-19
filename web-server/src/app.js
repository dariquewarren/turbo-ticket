const path = require('path')
const express = require('express')

// turns expressfunction into a usable variable
const app = express()


// creates a variable that represents file path FOR OUBLIC DIRECTORY
const publicDirectoryPath = path.join(__dirname, '../public')


// loads static page via the exoress method 'get' and exoress method 'static'
app.use(express.static(publicDirectoryPath))







/* 

GOAL: CREATE TWO MORE HTML FILES

1. CREATE A HTML PAGE FOR ABOUT WITH "ABOUT" TITLE
2. CREATE A HTML PAGE FOR HELO WITH "HELP" TITLE
3. REMOVE THE OLD ROUTE HANDLERS FOR BOTH
4. VISIT BOTH IN THE BROWSER TO TEST YOUR WORK



// creates a variable that represents file path FOR OUBLIC DIRECTORY
const helpPagePath = path.join(__dirname, '../public')
// loads static page via the express method 'get' and exoress method 'static'
app.use(express.static(helpPagePath))




// creates a variable that represents file path FOR OUBLIC DIRECTORY
const aboutPagePath = path.join(__dirname, '../public')
// loads static page via the express method 'get' and express method 'static'
app.use(express.static(helpPagePath))


*/


app.get('/weather', (req, res)=>{
    res.send( {
        forecast: 'It is weather',
        location: 'It is here'
    })
 })




app.listen(3000, ()=>{
    console.log('server is up on port 3000')
})