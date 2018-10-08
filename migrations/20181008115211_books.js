
exports.up = function(knex, Promise) {
    return knex.schema.createTable('books', (book) => {
        book.increments('id');
        book.string('BookTitle');
        book.string('BookGenre');
        book.text('BookDescription');
        book.string('BookCoverURL');
        book.string('Author1FirstName');
        book.string('Author1LastName');
        book.text('Author1Biography');
        book.string('Author1PortraitURL');
        book.string('Author2FirstName');
        book.string('Author2LastName');
        book.text('Author2Biography');
        book.string('Author2PortraitURL');
        book.string('Author3FirstName');
        book.string('Author3LastName');
        book.text('Author3Biography');
        book.string('Author3PortraitURL');
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('books');
};
