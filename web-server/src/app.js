const path = require('path')
const express = require('express')
const hbs =require('hbs')
const app = express()
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
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
    if(!req.query.address){
        return res.send({
            error: 'please provide an address'
        })
    } else {
        geocode(req.query.address, (error, {latitude, longitude, location})=>{
            if (!req.query.address) {
                return res.send({
                    error: error
                })
            }
    
            forecast(latitude, longitude, (error, {description, temperature, precipitation}) => {
                if (error) {
                    return res.send({
                        error: error
                    })
                
                }else {
                    
                    res.send( {
            forecast: `${description}. It is currently ${temperature} degrees out with ${precipitation}% chance of rain`,
            location: location,
            address: req.query.address
        })
                }
            
    
                
            })
        })

        

    }


    
    
    
 })



 /* GOAL: WIRE UP / WEATHER
 1. REQUIRE GEOCODE/FORECAST INTO APP.JS
 2. USE THE ADDRESS TO GEOCODE
 3.USE THE COORDINATES TO GET FORECAST
 4. SEND BACK THE REAL FORECAST AND LOCATION
 */
 app.get('/products', (req, res)=>{
     if (!req.query.search) {
      return  res.send({
            error: 'you must provide a search term'
        })
     }
   console.log(req.query.search)
    res.send({
        products: []
    })
 })

app.get('/help/*', (req, res)=>{
    res.render('404', {
        errorMessage: 'HELP ARTICLE NOT FOUND',
        title: '404',
        name: ' Darique Warren'
    })
})

app.get('*', (req, res)=>{
    res.render('404', {
        errorMessage: 'PAGE NOT FOUND',
        title: '404',
        name: ' Darique Warren'
    })
})
/* 
GOAL: CREATE AND RENDER A 404 PAGE WITH HANDLEBARS
1-SETUP THE TEMPLATE TO RENDER THE HEADER AND FOOTER
2- SETUP THE TEMPLATE TO RENDER AN ERROR MESSAGE IN A <P>
3-RENDER THE TEMPLATE FOR BOTH 404 ROUTES
    - PAGE NOT FOUND
    - HELP ARTICLE NOT FOUND
    3-TEST YOUR WORK. VISIT /WHAT AND /HELP/UNITS

*/

app.listen(3000, ()=>{
    console.log('server is up on port 3000')
})