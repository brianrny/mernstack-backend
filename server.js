const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const mongodb = require("./app/models")

const app = express();

const corsOptions = {
    origin: "http://localhost:8081"
}

const PORT = process.env.PORT || 8080

app.use(cors(corsOptions))

app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.json({ message: "IT IS WORKING!! " })
})

app.listen(PORT, () => {
    console.log("Listening on: " + PORT)
})