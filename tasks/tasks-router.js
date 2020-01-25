const express = require('express');

const router = express.Router();

const dBase = require('../data/dbConfig')

router.get('/', (req, res) => {
    dBase.select('*')
        .from('tasks')
        .then(tasks => {
            res.status(200).json(tasks)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                errorMessage: "Error retrieving the tasks"
            })
        })
})

//Retrieve Task List

router.get('/:id', (req, res) => {
    const id = req.params.id
    dBase('tasks'). where({
        id: id
    }).select('id')
    .then(taskId => {
        res.status(200).json(taskId)
    })
    .catch(err => {
        res.status(500).json({
            errorMessage: "Task ID cannot be retrieved",
            message: err.message
        })
    })
})

//Add a task
router.post('/', (req, res) => {
    const data = {
        project_id: req.body.project_id,
        description: req.body.description,
        notes: req.body.notes,
    };
    dBase('tasks').insert(data)
        .then(postedTask => {
            dBase('tasks').where({id :postedTask[0]}).first()
                .then(newTask => {
                    res.status(201).json(newTask);
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).json({
                        errorMessage: "Task could not be created",
                        message: err.message
                     });
                });  
        })
        
});

module.exports = router;