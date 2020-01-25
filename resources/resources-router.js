const express = require('express');

const router = express.Router();

const dBase = require('../data/dbConfig');

//Get resources list

router.get('/', (req, res) => {
 dBase.select('*')
       .from('resources')
    .then(resources => {
        res.status(200).json(resources)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ 
            errorMessage: "Error retrieving the list of resources"
        })
    })
})

//Get resource list by id

router.get('/:id', (req, res) => {
    const id = req.params.id
    dBase('resources'). where({
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

//Add a resource

router.post('/', (req, res) => {
    const data = {
        name: req.body.name,
        decription: req.body.description
    };
    resourceData('resources').insert(data)
        .then(postedAccount => {
            dBase('accounts').where({
                    id: postedAccount[0]
                }).first()
                .then(newAccount => {
                    res.status(201).json(newAccount);
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).json({
                        errorMessage: "Account could not be created",
                        message: err.message
                    });
                });
        })

});

//Get resource by ID

router.get('/:id', (req, res) => {
    const id = req.params.id 
    dBase('resources'). where({
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