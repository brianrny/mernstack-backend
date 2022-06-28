const mongoose = require("mongoose")

const Exercise = mongoose.model("exercise", mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    sets: [
        {
            load: {
                type: Number,
                required: true
            },
            reps: {
                type: Number,
                required: true
            },
            finished: Boolean
        }
    ],
    isDone: Boolean
}))

module.exports = Exercise