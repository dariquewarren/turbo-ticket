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
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

messageOne.textContent = `From JavaScript`

/*
GOAL: RENDER CONTENT TO PARAGRAPHS
1. SELECT THE SECOND MESSAGE P FROM JAVASCRIPT
2. JUST BEFORE  FETCH, RENDER LOADING MESSAGE AND EMPTY P
3. IF ERROR, RENDER ERROR
4. IF NO ERROR, RENDER LOCATION AND FORECAST
5. TEST YOUR WORK! SEARCH FOR ERRORS AND VALID LOCATIONS

*/

weatherForm.addEventListener('submit', (e)=>{
e.preventDefault()

var location = searchElement.value
messageTwo.textContent = `FETCHING CONTENT....PLEASE WAIT OR TRY AGAIN`
fetch(`http://localhost:3000/weather?address=${location}`).then((response)=> {
    response.json().then((data)=>{
       if(data.error) {
       return    messageOne.textContent = `${data.error}`
       }
       messageOne.textContent = `${data.location}`
       messageTwo.textContent = `${data.forecast}`
       
})
})  
console.log(location)
})


