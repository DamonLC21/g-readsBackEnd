
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books_authors').del()
    .then(function () {
      // Inserts seed entries
      return knex('books_authors').insert([
        {
          bookID: 1,
          authorID: 1,
        },
        {
          bookID: 1,
          authorID: 2
        },
        {
          bookID: 1,
          authorID: 3
        },
        {
          bookID: 2,
          authorID: 4
        },
        {
          bookID: 3,
          authorID: 5
        },
        {
          bookID:4,
          authorID: 6
        },
        {
          bookID:5,
          authorID: 6
        },
        {
          bookID: 6,
          authorID: 6
        }
      ]);
    });
};
