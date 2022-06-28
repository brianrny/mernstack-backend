const initializeDbConnection = require("./app/database")

const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const path = require("path")

const mongoose = require("mongoose")
const { create, findAll, findOneById, updateById, deleteById } = require("./app/controllers/exercise.controller")

require("dotenv").config({
    path: path.resolve(__dirname + '/.env')
})

const PORT = process.env.PORT || 8080
const corsOptions = {
    origin: "http://localhost:8081"
}

initializeDbConnection();

const app = express();

app.use(cors(corsOptions))
app.use(bodyParser.json())

app.listen(PORT, () => {
    console.log("Listening on: " + PORT)
})

app.get("/", (req, res) => {
    res.send({ message: "Werkend" })
})

app.post("/api/exercise", create)
app.get("/api/exercise", findAll)
app.get("/api/exercise/:id", findOneById)
app.put("/api/exercise/:id", updateById)
app.delete("/api/exercise/:id", deleteById)
