const initializeDbConnection = require("./app/database")

const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const path = require("path")

const mongoose = require("mongoose")

const PORT = process.env.PORT || 8080
const corsOptions = {
    origin: "http://localhost:8081"
}

initializeDbConnection()

app.use(cors(corsOptions))
app.use(bodyParser.json())

app.listen(PORT, () => {
    console.log("Listening on: " + PORT)
})

app.get("/", (req, res) => {
    res.send({ message: "Werkend" })
})

