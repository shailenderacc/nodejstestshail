const chalk = require('chalk')

const validator = require('validator')

const firstName = require('./utils1.js')

const getNotes = require('./notes.js')

const add = require('./utils.js')

const sum = add(4,5)

const msg = getNotes()

console.log(msg)

console.log(firstName)

console.log(sum)

console.log(validator.isEmail('example.com'))

console.log(validator.isURL('www.xxx.com'))

console.log(chalk.green.bgRedBright.inverse('Success!!'))





