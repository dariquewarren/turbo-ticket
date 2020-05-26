

console.log('client side java is loaded')

fetch('http://puzzle.mead.io/puzzle').then((response)=>{
    response.json().then((data)=>{
        console.log(data)
    })
})
const locationTest = 'boston'
fetch(`http://localhost:3000/weather?address=harlem`).then((response)=> {
    response.json().then((data)=>{
       if(data.error) {
           console.log(data.error)
       }
       
       console.log(data.location)
       console.log(data.forecast)
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