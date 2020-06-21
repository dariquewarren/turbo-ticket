const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]
// checks to see if an address was givien as an argument. if it was, it usess geocode() to transfomr address string into a latitude/longtitude set
// then forecast() takes latitude/longtitude data and returns weather information
if (!address) {
    console.log('Please provide an address')
} else {
    geocode(address, (error, { latitude, longitude, location }) => {
        if (error) {
            return console.log(error)
        }

        forecast(latitude, longitude, (error, {description, temperature, precipitation}) => {
            if (error) {
                return console.log(error)
            }

            console.log(location)
            console.log(`${description}. It is currently ${temperature} degrees out with ${precipitation}% chance of rain`)
        })
    })
}
