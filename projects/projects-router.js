const express = require('express');

const router = express.Router();

const dBase = require('../data/dbConfig')

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

module.exports = router;