const db = require('../data/dbConfig');

module.exports = {
    find,
    findById,
    insert
}

function find() {
    return db.select('*').from('tasks')
}

function findById(id) {
    return db('tasks').where({id})
}

function insert(task) {
    return db('tasks')
        .insert(task)
        .then(ids => ids[0])
}
