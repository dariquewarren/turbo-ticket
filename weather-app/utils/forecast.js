const request = require('request')

const forecast = (latitude, longitude, callback) => {
    // use weatherStack api instead of darksky
const url =  `http://api.weatherstack.com/current?access_key=9fdf17fc0144d6830d27103e37c7b012&query=${latitude},${longitude}&units=f` 
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback( body.current.weather_descriptions + ' It is currently ' + body.current.temperature + ' degress out. There is a ' + body.current.precip + '% chance of rain.', undefined)
        }
    })
}

module.exports = forecast