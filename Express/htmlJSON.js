const express = require("express")
const app = express()

app.get("/", (req, res) => {
    
    // To send multiple html lines, use res.write:
    res.write("<h1>I am first HTML line</h1>")
    res.write("<h1>Second HTML line here</h1>")
    res.send()

})

app.get("/json", (req, res) => {
    res.send({
        id: 1,
        name: "JSON",
        type: "JSON Data"
    })
})

app.listen(8000, "127.0.0.1", () => {
    console.log("listening...")
})