const request = require('request')

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
                precipitation: body.current.precip
            }) 
        }
    })
}

module.exports = forecast