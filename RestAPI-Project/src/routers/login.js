const express = require("express")
const router = new express.Router()
const signup = require("../models/signup")

router.post("/login", async (req, res) => {
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

module.exports = router