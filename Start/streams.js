const fs = require('fs')
const readStream = fs.createReadStream('./docs/blog2.txt')

readStream.on('data', (chunk) => {
    console.log('------NEW cHUNK-------')
    console.log(chunk.toString())
})