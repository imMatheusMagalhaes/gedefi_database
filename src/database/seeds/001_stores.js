
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('stores').del()
    .then(function () {
      // Inserts seed entries
      return knex('stores').insert([
        {storename: 'matheusSA'}
      ]);
    });
};
