const express = require('express');

const router = express.Router();

const db = require('../data/dbConfig');

const Resources = require('./resources-model')


//Get projects list

router.get('/', (req, res) => {
   Resources.resourceList()
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



module.exports = router;