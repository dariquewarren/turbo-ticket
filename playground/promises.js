const doWorkPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject('wrongo bucko!')
        // resolve([7, 4, 1])
    }, 2000)
})

doWorkPromise.then((resolve)=>{
    console.log('success!', resolve)
}).catch((error)=>{
    console.table(error)
})