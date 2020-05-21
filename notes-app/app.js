const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')





// Customize yargs version
yargs.version('1.1.0')

// adds object with title/body keys and custom value
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// filters key/value pairs by the title key. removes title and body of resulting notes
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
        },
    handler: function (argv) {
        notes.removeNote(argv.title)
    }
})

// shows all the notes within notes.json file
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function () {
        console.log(notes.loadNotes())
    }
})

// returns body value attached to the title key requested
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function (argv) {
        //argv.title
        console.log(notes.readNotes(argv.title))  
    }
})
// i need to find out exactly what this does, not sure enough to explain it. 
// i think it takes all the commands and makes them usable within the command line.i THINK
yargs.parse()