const express = require('express');

const router = express.Router();

const dBase = require('../data/dbConfig')

//Get project list

router.get('/', (req, res) => {
    dBase.select('*')
    .from('projects')
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ 
            errorMessage: "Error retrieving the list of projects"
        })
    })
})

//Retrieve project list by id

router.get('/:id', (req, res) => {
    const id = req.params.id
    dBase('projects').where({
            id: id
        }).select('id')
        .then(projectId => {
            res.status(200).json(projectId)
        })
        .catch(err => {
            res.status(500).json({
                errorMessage: "Project ID cannot be retrieved",
                message: err.message
            })
        })
})

//Add A Project
router.post('/', (req, res) => {
    
    const data = {
        name: req.body.name,
        description: req.body.description
    };
    dBase('projects').insert(data)
        .then(postedProject => {
            dBase('projects').where({
                    id: postedProject[0]
                }).first()
                .then(newProject => {
                    res.status(201).json(newProject);
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).json({
                        errorMessage: "Project could not be created",
                        message: err.message
                    });
                });
        })

});

module.exports = router;