const chalk = require('chalk')

const yargs = require('yargs')

const getNotes = require('./notes.js')
const { option } = require('yargs')

// customize the yargs version

yargs.version = '1.0.1'

// Create add command
yargs.command ({
    command: 'add',
    describe: 'add a new note',
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
    handler: function(argv) {
        console.log('Title:' +argv.title)
        console.log('Body:' +argv.body)
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a new note',
    handler: function(){
        console.log('Removing the note!')
    }
})

//Create read command
yargs.command({
    command: 'read',
    describe: 'reads a list',
    handler: function(){
        console.log('Read from the note!')
    }
})

//Create list command
yargs.command({
    command: 'list',
    describe: 'List the notes!',
    handler: function(){
        console.log('list the notes!')
    }
})
// add,remove,read,list
yargs.parse()