exports.up = function(knex, Promise) {  
    return Promise.all([
      knex.schema.createTable('famous_milestones', function(table){
        table.increments('id')
        table.string('description');
        table.date('date_achieved');
        table.integer('famour_people_id')
        
      })
    ])
  };

  exports.down = function(knex, Promise) {  
    return Promise.all([
      knex.schema.dropTable('famous_milestones')
    ])
  }; 