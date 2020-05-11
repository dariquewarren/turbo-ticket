const fs = require('fs')
const chalk = require('chalk')
const getNotes = function () {
    return 'Your notes...'
}
// this adds notes to json file if noduplicate exists theere already

const addNote = function (title, body) {
const notes = loadNotes()
const duplicateNotes = notes.filter(function (note){
return note.title === title
})

if (duplicateNotes.length === 0){
notes.push({
        title: title,
        body: body
    })
    saveNotes(notes)
    console.log(chalk.green.inverse('Note added!'))
} else {
    console.log(chalk.red.inverse('Note title taken!'))

}




}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}


const loadNotes = function(){
   try  {
const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
        }catch(e){
    return []
            }
   
}
//2. CREATE AND EXPORT A REMOVENOTE FUNCTION FROM NOTES.JS

const removeNote = function(title){
const notes = loadNotes()
const keptNotes = []

notes.forEach((note)=>{
    if (note.title !== title){
    keptNotes.push(note)
    
    } else {
       
    }
    
    })
if (keptNotes.length !== notes.length) {
    console.log(chalk.bgGreen('Note Removed!'))
} else (
    console.log(chalk.bgRed('No Note Found'))
)
saveNotes(keptNotes)
// INSTRUCTOR WAY BELOW. FIGURE OUT HOW TO DO THIS WITH FILTER!!!!


// const notesToKeep = notes.filter(function(note){
//    note.title !== title
// })
// saveNotes(notesToKeep)

// // 
// console.log('new array of objects saved')
}
// CHALLENGE: WIRE UP REMOVE NOTE

//1. LOAD EXISTING NOTES
//2. USE ARRAY FILTER METHOD TO TREMOVE THE MATCHING NOTE IF ANY
//3. SAVE THE NEWLY CREATEED ARRAY
//4. TEST YOUR WORK WITH A TITLE THAT EXISTS AND A TITLE THAT DOESN;T EXIST






module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}