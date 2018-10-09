const connection = require('./knexfile')[process.env.NODE_ENV || 'development'];
const knex = require('knex')(connection);


module.exports = {

    listAllBooks() {
        return knex('books').orderBy('id', 'ascending');
    },

    listAllAuthors() {
        return knex('authors').orderBy('id', 'ascending');
    },

    listAllAuthorsOfBooks(){
        return knex('books_authors').orderBy('id', 'ascending');
    }

}