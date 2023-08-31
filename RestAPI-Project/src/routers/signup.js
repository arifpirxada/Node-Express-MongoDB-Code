const express = require('express');
const router = new express.Router()
const signup = require("../models/signup")

router.post("/signup", async (req, res) => {
    try {
        const reqData = req.body

        if (reqData.pass === reqData.cpass) {

            const newData = new signup({
                name: reqData.name,
                email: reqData.email,
                password: reqData.pass,
                cpassword: reqData.cpass
            })

            await newData.save()
            res.status(201).json({ message: 'Insertion successful' })

        } else {
            res.status(400).json({ message: 'Passwords do not match' })
        }

    } catch (e) {
        if (e.code === 11000 && e.keyPattern && e.keyPattern.email) {
            res.status(400).json({ message: 'Email already exists' });
        } else {
            res.status(500).json({ message: 'Internal server srror' });
        }
    }
})

module.exports = router