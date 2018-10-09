
exports.up = function(knex, Promise) {
    return knex.schema.createTable('books_authors', (book_author) => {
        book_author.increments('id');
        book_author.integer('bookID').unsigned();
        book_author.foreign('bookID').references('books.id')
        book_author.integer('authorID').unsigned();
        book_author.foreign('authorID').references('authors.id')
    }) 
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('books_authors');
};
