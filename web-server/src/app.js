const path = require('path')
const express = require('express')
const hbs = require('hbs')

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()
const port = process.env.PORT || 3000

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
        geocode(req.query.address, (error, {latitude, longitude, location}={})=>{
            if (!req.query.address) {
                return res.send({
                    error: error
                })
            }
    
            forecast(latitude, longitude, (error, {description, temperature, precipitation}={}) => {
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


app.listen(port, ()=>{
    console.log('server is up on port 3000' + port)
})