const connection = require('../../db-config');

const getOne = (req, res) => {
  connection
    .promise()
    .query('SELECT * FROM categories WHERE id = ?', [req.params.id])
    .then((result) => {
      if (result[0][0]) res.status(200).json(result[0][0]);
      else res.status(404).send('Categorie not found');
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

module.exports = getOne;
