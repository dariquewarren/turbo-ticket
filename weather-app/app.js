const request = require('request')

const url ='http://api.weatherstack.com/current?access_key=9fdf17fc0144d6830d27103e37c7b012&query=37.8267,%20-122.4233&units=f'

request({ url: url, json: true}, (error, response)=>{
   
   
    console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. ' + 'It feels like ' + response.body.current.feelslike + ' degrees out.') 
})




const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZGFyaXF1ZXciLCJhIjoiY2thMnJlbm40MDdiZjNlcWxwdW84aGpvaSJ9.ApzQD4rk5YJar4fM9Tg3fg&limit=1'

request({ url: geocodeUrl, json: true }, (error, response)=>{
    console.log(`LAT: ${response.body.features[0].center[0]} lONG: ${response.body.features[0].center[1]}`)
})
// GEOCODING 
// ADDRESS -> lAT/LONG -> WEATHER


// GOAL: PRINT THE LAT/LONG FO LOAANGELES

//1. FIRE OFF A NEW REQUEST TO THE URLEXPLORED IN BROWSER
//2. HAVE THE REQUEST MODULE PARSE IT AS JSON

//3. PRINT BOTH THE LATITUDE AND LONGTITUDE TO THE TERMINAL
//4. TEST WORK 