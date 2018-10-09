
exports.up = function(knex, Promise) {
    return knex.schema.createTable('books', (book) => {
        book.increments('id');
        book.string('Title');
        book.string('Genre');
        book.text('Description');
        book.string('CoverURL');
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('books');
};
