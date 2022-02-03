const connection = require('../../db-config');

const getAllCategoriesGames = (req, res) => {
  connection
    .promise()
    .query('SELECT games.name, games.id, games.description, games.screenshots FROM games INNER JOIN categories ON categories.id = games.id_categorie WHERE categories.id = ?', [req.params.id])
    .then((result) => {
      if (result[0][0]) res.status(200).json(result[0]);
      else res.status(404).send('Categorie not found');
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

module.exports = getAllCategoriesGames;
