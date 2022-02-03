const connection = require('../../db-config');

const deleteGame = (req, res) => {
  connection
    .promise()
    .query('DELETE FROM games WHERE id = ?', [req.params.id])
    .then((result) => {
      result.status(204).send('Game deleted correctly');
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

module.exports = deleteGame;
