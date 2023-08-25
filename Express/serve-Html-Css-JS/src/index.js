const express = require("express")
const app = express()
const path = require('path');
const fs = require('fs');

const staticPath = path.join(__dirname, "../public")
app.use(express.static(staticPath))

app.get("/", (req, res) => {
    res.send("Welcome to the Express Home Page")
})


app.get("/about", (req, res) => {
    res.send("This is about page")
})

app.get("/contact", (req, res) => {
    res.send("Welcome to the Express Contact Page")
})

app.get("/login", (req, res) => {
    res.send("Welcome to the Express Login Page")
})

app.get("/partner", (req, res) => {
    res.send("Welcome to the Express Partner Page")
})

app.listen(8000, "127.0.0.1", () => {
    console.log("listening...")
})