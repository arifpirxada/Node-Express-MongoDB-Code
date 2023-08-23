const fs = require("fs");

fs.writeFileSync("test.txt","welcome to File system module")
fs.appendFileSync("test.txt","I am appended to test.txt")