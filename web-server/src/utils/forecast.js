const request = require('request')

/*
GOAL: ADD NEW DATA TO FORECAST
1. UPDATE THE FORECAST STRING TO INCLUDE NEW DATA
2. COMMIT CHANFES
3. PUSH CHANGES TO GITHUB AND DEPLOY TO HEROKU
4. TEST YOUR WORK IN THE LIVE APPLICATION

GRAB:
DESCRIPTION
TEMPERATURE
PRECIPITATION
HUMIDITY
FEELS LIKE

*/



const forecast = (latitude, longitude, callback) => {
    // use weatherStack api to take a longtitude and latitude and respond with weather information for that area
const url =  `http://api.weatherstack.com/current?access_key=9fdf17fc0144d6830d27103e37c7b012&query=${latitude},${longitude}&units=f` 
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback( undefined, {
                description: body.current.weather_descriptions ,
                temperature: body.current.temperature,
                precipitation: body.current.precip,
                humidity: body.current.humidity,
                feelsLike: body.current.feelslike
            }) 
        }
    })
}

module.exports = forecast