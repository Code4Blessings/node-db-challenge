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

module.exports = router;