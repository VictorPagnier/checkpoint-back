const connection = require('../../db-config');

const postGame = (req, res) => {
  const {
    name, description, genre, image, year, screenshots, id_categorie,
  } = req.body;
  connection
    .promise()
    .query(
      'INSERT INTO games (name, description, genre, image, year, screenshots, id_categorie) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [name, description, genre, image, year, screenshots, id_categorie],
    )
    .then((result) => {
      const createdGame = {
        id: result[0].insertId,
        name,
        description,
        genre,
        image,
        year,
        screenshots,
        id_categorie,
      };
      res.status(201).json(createdGame);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

module.exports = postGame;
