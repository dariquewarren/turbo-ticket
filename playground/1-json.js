const fs = require('fs')

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.name = 'Darique Warren'
data.age = '999999999'

const newdataJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json', newdataJSON)
console.log(typeof newdataJSON)


//
// CHALLENGE: WORK WITH JSON AND THE FILE SYSTEM

//1.    LOAD AND PARSE THE JSON DATA
//2.    CHANGE THE NAME AND AGE PROPERTY USING YOUR INFO
//3. STRINGIFY THE CHANGED OBJECT AND OVERWRITE THE ORIGINAL DATA
//4. TEST YOUR WORK BY VIEWING DATA IN THE JSON FILE