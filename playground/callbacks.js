const doWorkCallback = (callback) => {
setTimeout(()=>{
    callback('this is my error!', undefined)
    }, 2000)
}

doWorkCallback ((error, result)=>{
    if (error){
       return console.log(error)
    }
    console.log(result)
})