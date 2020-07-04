require('../src/db/mongoose')
const User = require('../src/models/user')

// 5ee7f9a559fe8e29085bebe9

// User.findByIdAndUpdate("5ee7f9a559fe8e29085bebe9", {age: 105}).then((user)=>{
//     console.log(user)
//     return User.countDocuments({age: 105})
// }).then((result)=>{
//     console.log(result)

// }).catch((e)=>{
// console.log(e)
// })

const updateAgeAndCount = async (id, age)=>{
const user = await User.findByIdAndUpdate(id, {age})
const count = await User.countDocuments({age})
return count
}

updateAgeAndCount("5ee7f9a559fe8e29085bebe9", 5005005).then((count)=>{
    console.log(count)
}).catch((e)=>{
console.log(e)
})