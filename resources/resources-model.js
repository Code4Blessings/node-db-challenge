const db = require('../data/dbConfig');

module.exports = {
    find,
    findById,
    insert
}

function find() {
    //select * from resources
    return db.select('*').from('resources')
}

function findById(id) {
   return db('resources').where({id})
}

function insert(resource) {
    return db('resources')
        .insert(resource)
        .then(ids => ids[0])
}