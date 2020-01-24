const express = require('express');

const router = express.Router();

const dBase = require('../data/dbConfig')

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

module.exports = router;