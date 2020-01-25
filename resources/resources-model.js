module.exports = {
    resourceList
}

function resourceList() {
    return db.select('*')
        .from('resources')
}