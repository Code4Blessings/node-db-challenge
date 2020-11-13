
exports.seed = function(knex) {
  // truncate resets back to 1
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          id: 1,
           project_id: 1,
           description: 'Find images from the unsplash site',
           notes: 'Upload images in assets folder',
           completed: true
          },

        {
          id: 2, 
          project_id: 1,
          description: 'Set up React ad Redux Framework',
          notes: 'Apply state management',
          completed: false
        },

        {
          id: 3,
          project_id: 1,
          description: 'Hook to backend server',
          notes: 'Use Node.js',
          completed: false
        }
      ]);
    });
};
