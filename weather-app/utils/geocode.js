const request = require('request')

const geocode = (address, callback) => {
    const url = `http://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiZGFyaXF1ZXciLCJhIjoiY2thYnp4YWdyMDdodDMxbXcwOGsxcnA2ciJ9.XEueTGOscJKBKl1IZZiOiQ&limit=1` 

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}
// pk.eyJ1IjoiZGFyaXF1ZXciLCJhIjoiY2thYnp4YWdyMDdodDMxbXcwOGsxcnA2ciJ9.XEueTGOscJKBKl1IZZiOiQ
module.exports = geocode