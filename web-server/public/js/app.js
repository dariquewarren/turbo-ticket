

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


const weatherForm = document.querySelector('form')

const searchElement = document.querySelector('input')

weatherForm.addEventListener('submit', (e)=>{
e.preventDefault()

var location = searchElement.value
fetch(`http://localhost:3000/weather?address=${location}`).then((response)=> {
    response.json().then((data)=>{
       if(data.error) {
           console.log(data.error)
       }
       
       console.log(data.location)
       console.log(data.forecast)
})
})  
console.log(location)
})


/*

GOAL: USE INPUT VALUE TO GET WEATHER

1. MIGRATE FETCH CALL INTO THE SUBMIT CALLBACK
2. USE THE SEARCH TEXT AS THE ADDRESS QUERY STRING VALUE
3. SUBMIT THE FORM WITH A VALID AND INVALID VALUE TO TEST
*/