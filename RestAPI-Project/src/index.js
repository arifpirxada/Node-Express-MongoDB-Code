const express = require("express")
const app = express()
const path = require('path')
const signup = require("./models/signup")
const port = process.env.PORT || 3000
require(path.join(__dirname, "./db/db"))

app.use(express.json())

app.get("/", (req, res) => {
    res.send("welcome bro")
})

app.post("/signup", async (req, res) => {
    try {
        const reqData = req.body

        const newData = new signup({
            name: reqData.name,
            email: reqData.email,
            password: reqData.pass,
            cpassword: reqData.cpass
        })

        await newData.save()
        res.status(201).json({ message: 'Insertion successful' })



    } catch (e) {
        if (e.code === 11000 && e.keyPattern && e.keyPattern.email) {
            res.status(400).json({ message: 'Email already exists' });
        } else {
            res.status(500).json({ message: 'Internal server srror' });
        }
    }
})

app.post("/login", async (req, res) => {
    try {
        const logData = req.body
        const user = await signup.find({ email: logData.email })

        if (user.length != 0) {
            if (logData.pass === user[0].password) {
                res.status(200).json({ message: 'Login success' })
            } else {
                res.status(400).json({ message: 'Wrong password' })
            }
        } else {
            res.status(400).json({ message: 'User not found' })
        }
    } catch {
        res.status(500).json({ message: 'Internal server error' })
    }
})

app.listen(port, () => {
    console.log("Listening...")
})