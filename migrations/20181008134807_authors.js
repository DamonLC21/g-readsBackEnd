
exports.up = function(knex, Promise) {
    return knex.schema.createTable('authors', (author) => {
        author.increments('id');
        author.string('firstName');
        author.string('lastName');
        author.text('biography');
        author.string('portraitURL');
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('authors');
};
