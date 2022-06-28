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

    exercise.save(err => {
        if (err) {
            res.status(400).send({ message: "Something went wrong.", err })
            return;
        }

        res.status(201).send({ message: "Exercise has been saved. " })
    })
}

const findAll = (req, res) => {
    const getAll = (err, docs) => {
        if (err) {
            res.status(404).send({ message: `No exercises found.`, err })
            return;
        }

        res.status(200).send({ exercises: docs })
    }

    Exercise.find({}, getAll)
}

const findOneById = (req, res) => {
    const _id = req.params.id

    const getExerciseById = (err, exercise) => {
        if (err || exercise === null) {
            res.status(404).send({ message: `Exercise with id: ${_id} could not be found.`, err })
            return;
        }

        res.status(200).send({ exercise })
    }

    Exercise.findById(_id, getExerciseById)
}

const updateById = (req, res) => {
    const _id = req.params.id

    const updatedExercise = {
        name: req.body.name,
        sets: req.body.sets,
        isDone: req.body.isDone

    };

    const updateExerciseById = (err, exercise) => {
        if (err) {
            res.status(404).send({ message: `Exercise with id: ${_id} could not be found.`, err })
            return;
        }

        res.status(200).send({ message: `Exercise with id: ${_id} has been updated.` })
    }

    Exercise.findByIdAndUpdate(_id, updatedExercise, updateExerciseById)
}

const deleteById = (req, res) => {
    const _id = req.params.id

    const deleteExerciseById = (err, exercise) => {
        if (err || exercise === null) {
            res.status(404).send({ message: `Exercise with id: ${_id} could not be found.`, err })
            return;
        }

        res.status(200).send({ message: `Exercise with id: ${_id} has been deleted.` })
    }

    Exercise.findByIdAndDelete(_id, deleteExerciseById)
}

module.exports = {
    create,
    findAll,
    findOneById,
    updateById,
    deleteById
}
