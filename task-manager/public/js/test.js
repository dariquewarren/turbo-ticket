var testDiv = document.getElementById('testDiv')
var testForm = document.getElementById('testForm')


testForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    fetch('http:localhost:3000/users').then((response)=> {
    
    
        response.json().then((data)=>{
           if(data.error) {
        //    return    messageOne.textContent = `${data.error}`
        console.log(data.error)
           }
        //    messageOne.textContent = `${data.location}`
        //    messageTwo.textContent = `${data.forecast}`
        // testDiv.innerHTML =`${data}`


        console.log(data)
           
    })
    })  
})