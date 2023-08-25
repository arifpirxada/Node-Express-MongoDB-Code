const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send("Welcome to the Express Home Page")
})

app.listen(8000, "127.0.0.1", () => {
    console.log("listening...")
})