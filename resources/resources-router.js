const express = require('express');

const router = express.Router();

const dB = require('../data/dbConfig');

const Resources = require('./resources-model')

//Get resources list

router.get('/', (req, res) => {

 Resources.find()
    .then(resources => {
        res.status(200).json(resources)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ 
            errorMessage: "Error retrieving the list of resources", 
            message: err.message
        })
    })
})

//Retrieve resource list by id

router.get('/:id', (req, res) => {
    const id = req.params.id;

    Resources.findById(id)
    .then(resources => {
        const resource = resources[0];

        if(resource) {
            res.json(resource);
        }else {
            res.status(404).json({
                errorMessage: 'Could not find resource'
            })
        }
    })
    .catch(err => {
        res.status(500).json({
            errorMessage: "Resource ID cannot be retrieved",
            message: err.message
        })
    })
})

//Add a resource

router.post('/', (req, res) => {
    const resourceData = req.body;

        Resources.insert(resourceData)
        .then(id => {
            res.status(201).json({created: id})
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
    dBase('resources').where({
        id: id
    }).select('id')
    .then(resourceId => {
        res.status(200).json(resourceId)
    })
    .catch(err => {
        res.status(500).json({
            errorMessage: "Resource ID cannot be retrieved",
            message: err.message
        })
    })
})



module.exports = router;