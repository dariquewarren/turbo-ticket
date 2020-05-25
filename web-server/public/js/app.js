console.log('client side java is loaded')

fetch('http://puzzle.mead.io/puzzle').then((response)=>{
    response.json().then((data)=>{
        console.log(data)
    })
})


/*

GOAL: FETCH WEATHER!

*/