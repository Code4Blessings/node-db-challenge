
exports.seed = function(knex) {
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {
          id: 1, 
          project_id: 1,
          name: 'laptop',
          description: 'Macintosh Air'
        },

        {
          id: 2, 
          project_id: 3,
          name: 'Desktop',
          description: 'Hewlett Packard'
        },

        {
          id: 3, 
          project_id:  2,
          name: 'meeting room',
          description: 'A quite place for a small group to do their projects'
        }
      ]);
    });
};
