
const http = require('http');
const EventEmitter = require("events");
const event = new EventEmitter();

event.on("myName", () => {
    console.log("arifpirxada")
})

event.emit("myName")

// With Arguments

event.on("checkStatus", (status, message) => {
    console.log(`Status: ${status} & Message: ${message}`)
})

event.emit("checkStatus", 200, "ok")