const express = require('express');

const router = express.Router();

const dB = require('../data/dbConfig');

const Projects = require('./projects-model')

//Get projects list

router.get('/', (req, res) => {

    Projects.find()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                errorMessage: "Error retrieving the list of projects",
                message: err.message
            })
        })
})

//Retrieve project by id

router.get('/:id', (req, res) => {
    const id = req.params.id;

    Projects.findById(id)
        .then(projects => {
            const project = projects[0];

            if (project) {
                res.json(project);
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
    const projectData = req.body;

    Projects.insert(projectData)
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

//Get resource by ID

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

module.exports = router;