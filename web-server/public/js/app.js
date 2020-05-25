console.log('client side java is loaded')

fetch('http://puzzle.mead.io/puzzle').then((response)=>{
    response.json().then((data)=>{
        console.log(data)
    })
})
const locationTest = 'Harlem'
fetch(`http://api.mapbox.com/geocoding/v5/mapbox.places/${locationTest}.json?access_token=pk.eyJ1IjoiZGFyaXF1ZXciLCJhIjoiY2thYnp4YWdyMDdodDMxbXcwOGsxcnA2ciJ9.XEueTGOscJKBKl1IZZiOiQ&limit=1`).then((response)=> {
    response.json().then((data)=>{
        
                 
        console.log(data.features[0].center[1])
         console.log(data.features[0].center[0])
    })
})
/*

GOAL: FETCH WEATHER!

1. SETUP A CALL TO FETCH WEATHER FOR BOSTON
2.GET THE PARSED json RESPONSE
        -IF ERROR PROPERTY, PRINT ERROR
        -IF NO ERROR PROPERTY, PRINT LOCATION AND FORECAST
3. REFRESH THE BROWSER AND TEST YOUR WORK

*/