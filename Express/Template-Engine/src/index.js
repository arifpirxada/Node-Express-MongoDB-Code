const express = require("express")
const app = express()
const path = require('path');

const staticPath = path.join(__dirname, "../public")
app.use(express.static(staticPath))

app.set("view engine", "hbs")

/* The below method allows you to change the name 
of hbs containing folder - views and it's path */

// const templatePath = path.join(__dirname, "../template")
// app.set("views", templatePath)


app.get("/", (req, res) => {
    res.render("index", {
        changeMe: "Color Changer App"
    })
})

app.listen(8000, "127.0.0.1", () => {
    console.log("listening...")
})