const connection = require('../../db-config');

const getAll = (req, res) => {
  connection
    .promise()
    .query('SELECT * FROM categories')
    .then((result) => {
      res.status(200).json(result[0]);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

module.exports = getAll;
