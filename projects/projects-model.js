const db = require('../data/dbConfig');

module.exports = {
    find,
    findById,
    insert
}

function find() {
    return db.select('*').from('projects')
}

function findById(id) {
    return db('projects').where({
        id
    })
}

function insert(project) {
    return db('projects')
        .insert(project)
        .then(ids => ids[0])
}
