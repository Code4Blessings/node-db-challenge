const express = require('express');

const router = express.Router();

const dB = require('../data/dbConfig');

const Tasks = require('./tasks-model')

//Get projects list

router.get('/', (req, res) => {

    Tasks.find()
        .then(tasks => {
            res.status(200).json(tasks)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                errorMessage: "Error retrieving the list of tasks",
                message: err.message
            })
        })
})

//Retrieve task by id

router.get('/:id', (req, res) => {
    const id = req.params.id;

    Projects.findById(id)
        .then(tasks => {
            const task = tasks[0];

            if (task) {
                res.json(task);
            } else {
                res.status(404).json({
                    errorMessage: 'Could not find project'
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                errorMessage: "Project ID cannot be retrieved",
                message: err.message
            })
        })
})

//Add a resource

router.post('/', (req, res) => {
    const resourceData = req.body;

    Tasks.insert(resourceData)
        .then(id => {
            res.status(201).json({
                created: id
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                errorMessage: "Account could not be created",
                message: err.message
            });
        });
})



module.exports = router;