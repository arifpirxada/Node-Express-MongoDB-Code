const os = require("os");

console.log(`Archetecture is: ${os.arch()}`)
console.log(`Free memory is: ${os.freemem()/1024/1024/1024}`)
console.log(`Total memory is: ${os.totalmem()/1024/1024/1024}`)
console.log(`Hostname is: ${os.hostname()}`)
console.log(`Platform is: ${os.platform()}`)
console.log(`Temp folder location: ${os.tmpdir()}`)
