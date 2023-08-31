const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1/RegistrationRestAPI")
.then(() => {
    console.log("Connection is successful")
}).catch((e) => {
    console.log("Connection unsuccessful!")
})