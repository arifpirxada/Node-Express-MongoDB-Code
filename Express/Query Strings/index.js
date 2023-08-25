const express = require("express")
const app = express()

app.get("/", (req, res) => {
    console.log(req.query.name)
    res.send("Express Home Page, Enter Parameter in the URL and it will be present in the console")
})

app.listen(8000, "127.0.0.1", () => {
    console.log("listening...")
})