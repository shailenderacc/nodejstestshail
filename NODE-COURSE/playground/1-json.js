const fs = require('fs')

const book = {
    title: 'Count of Monte Christo',
    author: 'Alexander Dumas'
}

const bookJSON = JSON.stringify(book)
console.log(bookJSON)

const parsedData = JSON.parse(bookJSON)
console.log(parsedData.title)

fs.writeFileSync('1-json.json', bookJSON)