const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.writeHead(200, { "Content-type": "text/html" })
        res.end('<h1>Welcome! add "/getAPI" in the URL to get JSON data</h1>')
    } else if (req.url == "/getAPI") {
        fs.readFile("myAPI.json", "utf-8", (err, data) => {
            if (err == null) {
                res.writeHead(200, { "Content-type": "text/json" })
                res.write(data)
            } else {
                console.log(err)
            }
            res.end()
        })
    }
})

server.listen(3000, "127.0.0.1", () => {
    console.log("Listening...")
})