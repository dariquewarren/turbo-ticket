const fs = require('fs')
const chalk = require('chalk')


// loads json object, adds keys and values to an array, that array is saved in the notes.json file via savenotes function
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

// converts notes object to a string and then writes it to notes.json file
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
// loads notes object via the loadnotes function, creates an array, 
//pushes all keyvalue pairs EXCEPT for note matching title parameter thats called 
// replaces original json object with new array as the json object, effectively deleting note
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

}








module.exports = {
    addNote: addNote,
    removeNote: removeNote
}