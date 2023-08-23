const fs = require("fs")

fs.writeFile("async.txt","I am created asynchronously", (err) => {
    console.log(err)
    console.log("File is created")
})