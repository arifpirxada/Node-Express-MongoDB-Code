const http = require("http");
const fs = require('fs');
const { argv } = require("process");

const server = http.createServer()


server.on("request", (req, res) => {

    // The below normal method loads all the data at once

    // fs.readFile("stream.txt", "utf-8", (err, data) => {
    //     if (err) return console.log(err)
    //     res.end(data)
    // })

    // The below stream method loads the which is read

    // const rstream = fs.createReadStream("stream.txt")

    // rstream.on("data", (chunkdata) => {
    //     res.write(chunkdata)
    // })
    // rstream.on("end", () => {
    //     res.end()
    // })
    // rstream.on("error", (err) => {
    //     res.end("Some error occured!")
    // })

    // This stream method can also be written in one line using the below function

    const rstream = fs.createReadStream("stream.txt")
    rstream.pipe(res)

})


server.listen(8000, "127.0.0.1", () => {
    console.log("listening...")
})
