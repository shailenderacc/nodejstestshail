const fs = require('fs')

/*const dataBuffer = fs.readFileSync('1-json.json')
console.log(dataBuffer)
const data1JSON = dataBuffer.toString()
console.log(data1JSON)
const data = JSON.parse(data1JSON)
console.log(data.title)

//{
    //"title": "Count of Monte Christo",
   // "author": "Alexander Dumas"
//}
*/

const dataBuffer = fs.readFileSync('1-json.json')
//console.log(dataBuffer)
const data1JSON = dataBuffer.toString()
//console.log(data1JSON)
const data = JSON.parse(data1JSON)
//console.log(data)

data.name = 'Shailender'
data.age = 35

const userJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json',userJSON)


