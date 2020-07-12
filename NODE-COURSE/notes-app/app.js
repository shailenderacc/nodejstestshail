const fs = require ('fs')

//fs.writeFileSync('notes.txt','This is Shailender.')

fs.appendFileSync('notes.txt','\nThis is the new new line')