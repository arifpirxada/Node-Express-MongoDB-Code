const express = require("express")
const app = express()
const path = require('path')
const port = process.env.PORT || 3000
require(path.join(__dirname, "./db/db"))
const loginRouter = require("./routers/login")
const signupRouter = require("./routers/signup")

app.use(express.json())
app.use(loginRouter)
app.use(signupRouter)

app.get("/", (req, res) => {
    res.send("welcome bro")
})

app.listen(port, () => {
    console.log("Listening...")
})