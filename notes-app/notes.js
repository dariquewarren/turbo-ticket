const fs = require('fs')
const chalk = require('chalk')

// CONSIDER ADDING AN UPDATE FUNCTION


// loads notes.json file, parses it into a useable array of objects then,
// filters through the array of objects for matches to the title parameter then,
// returns a template literal with the title as well as the body in it

const readNote = function (title) {
   
          const dataBuffer = fs.readFileSync('notes.json')
            const dataJSON = dataBuffer.toString()
            const allNotes = JSON.parse(dataJSON)
            const retrieveNote = allNotes.filter((e)=>{
               return e.title.toLowerCase() === title.toLowerCase()
            })
                        
   if(retrieveNote.length > 0){
    return `The note associated with ${title.toUpperCase()} is: ${retrieveNote[0].body}`
}else {
    console.log(chalk.inverse('TITLE NOT FOUND. CHECK SPELLING AND CaSe AND TRY AGAIN'))
}   
}
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

// converts notes object to a string and then writes it to the notes.json file
const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

// loads notes.json file and parses it into a useable array of objects.  
// addnote and remove note both rely on it to do their jobs.
const loadNotes = function(){
   try  {
const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
        }catch(e){
    return []
            }
   
}
// loads a notes object via the loadnotes function, creates an array, 
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
    readNote: readNote,
    addNote: addNote,
    removeNote: removeNote,
    loadNotes: loadNotes
}