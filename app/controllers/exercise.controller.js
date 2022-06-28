const Exercise = require('../models/exercise.model')

const create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({ message: "Exercise name cannot be empty." })
        return;
    }

    const exercise = new Exercise({
        name: req.body.name,
        sets: req.body.sets,
        isDone: req.body.isDone
    })

    exercise.save(error => {
        if (error) {
            console.error(error)
            return;
        }

        console.log("saved")
    })
}

const findAll = (req, res) => {
    const getAll = (err, docs) => {
        if (err) {
            console.error(err)
            return;
        }

        res.send({ exercises: docs })
    }

    Exercise.find({}, getAll)
}

const findOne = (req, res) => { }
const update = (req, res) => { }
const remove = (req, res) => { }

module.exports = {
    create,
    findAll,
    findOne,
    update,
    remove
}
