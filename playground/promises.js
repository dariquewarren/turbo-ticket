const add = (a, b) => {
return new Promise((resolve, reject)=>{
 setTimeout(()=>{
     resolve(a + b)
 }, 2000)
})
}

// add(7, 8).then((sum)=>{
// console.log(sum)
// add(sum, 35).then((second)=>{console.log(second)}).catch((e)=>{console.log(e)})
// }).catch((e)=>{
// console.log(e)
// })

add(1, 1).then((sum)=>{
    console.log(sum)
    return add(sum, 150)
}).then((sum2)=>{
console.log(sum2)
}).catch((e)=>{console.log(e)})