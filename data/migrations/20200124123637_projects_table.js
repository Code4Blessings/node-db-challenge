
exports.up = function(knex) {
  return  knex.schema.createTable('projects', tbl => {
      tbl.increments()
      tbl.integer('resource_id').references('id').inTable('resources')
      tbl.string('name').index().notNullable()
      tbl.text('description').nullable()
      tbl.boolean('completed').defaultTo(false).notNullable()
  })
    .createTable('tasks', tbl => {
        tbl.increments()
        tbl.integer('project_id').references('id').inTable('projects')
        tbl.text('description').notNullable()
        tbl.text('notes').nullable()
        tbl.boolean('completed').defaultTo(false).notNullable()
    })
    .createTable('resources', tbl => {
        tbl.increments()
        tbl.integer('project_id').references('id').inTable('projects')
        tbl.string('name').index().notNullable()
        tbl.text('description').nullable()
    })
    .createTable('project_resources', tbl => {
        tbl.increments()
        tbl.integer('project_id').references('id').inTable('projects')
        tbl.integer('resource_id').references('id').inTable('resources')
    })
};

exports.down = function(knex) {
   return knex.schema.dropTableIfExists('projects')
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('project_resource')
};
