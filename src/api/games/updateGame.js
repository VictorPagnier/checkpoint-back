const connection = require('../../db-config');

const updateGame = (req, res) => {
  connection
    .promise()
    .query('UPDATE games SET ? WHERE id = ?', [req.body, req.params.id])
    .then((result) => {
      result.status(204).send('Game updated correctly');
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

module.exports = updateGame;
