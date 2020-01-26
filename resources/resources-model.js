const db = require('../data/dbConfig');

module.exports = {
    find,
}

function find() {
    //select * from resources
    return db.select('*').from('resources')
}