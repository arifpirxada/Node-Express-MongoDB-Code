const http = require("http")

const server = http.createServer((req, res) => {
    console.log(req.url)
    if(req.url == "/") {
        res.end("Welcome to Node.js Server")
    } else if(req.url == "/about") {
        res.end("Hi! About us page here")
    } else {
        res.writeHead(404, {"content-type": "text/html"})
        res.end("<h1>404 Page does not exist</h1>")
    }
})

server.listen(8000, "127.0.0.1", () => {
    console.log("Listening to port no 8000")
})