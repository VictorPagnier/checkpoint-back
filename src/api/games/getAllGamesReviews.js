const connection = require('../../db-config');

const getAllGamesReviews = (req, res) => {
  connection
    .promise()
    .query('SELECT * FROM reviews INNER JOIN games ON id_jeu = games.id')
    .then((result) => {
      res.status(200).send(result[0]);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

module.exports = getAllGamesReviews;
