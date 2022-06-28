const mongoose = require('mongoose')

function initializeDbConnection() {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Succesfully connected to the database!")
    }).catch(err => {
        console.error(err)
        process.exit()
    })
}

module.exports = initializeDbConnection
