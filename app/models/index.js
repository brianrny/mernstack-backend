const mongoose = require("mongoose")

const mongoDbConfig = require("../config/mongodb.config")

mongoose.Promise = global.Promise

const db = {}
db.mongoose = mongoose
db.url = mongoDbConfig.url
db.exercise = require("./exercise.model")

module.exports = db;
