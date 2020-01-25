
exports.seed = function(knex) {
  // Resets back to 1
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          id: 1, 
          name: 'Cat Redux React App',
          description: 'Find a cat API and connect it to the Cat Redux App',
          completed: true
        },
        {
          id: 2, 
          name: 'ToDo List',
          description: 'Build a ToDo list with a useReducer hook',
          completed: true
        },
        {
          id: 3, 
          name: 'Endpoints',
          description: 'Build CRUD operations for a Receipt Tracker App',
          completed: false
        }
      ]);
    });
};
