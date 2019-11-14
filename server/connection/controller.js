const connection = require('./model');

const controller = {};

controller.createConnection = (req, res) => {
  const newConnection = {
    userid: req.body.userid,
    otheruserid: req.body.otheruserid,
    connectionstatus: req.body.connectionstatus,
  };

  connection.create(newConnection)
    .then((dbResponse) => { res.send(dbResponse) })
    .catch((err) => {
      res.status(500).send({
        message: err.message
      });
    });
}

// to delete connection 

controller.connectionDelete = (req, res) => {
  const connectionId = req.params.id;
  const idObject = { _id: connectionId };

  connection.deleteOne(idObject)
    .then((dbResponse) => { res.send(dbResponse) })
    .catch((err) => {
      res.status(500).send({
        message: err.message
      });
    });
}

// to get connection 

controller.getConnection = (req, res) => {
  connection.find()
    .then((dbResponse) => { res.send(dbResponse) })
    .catch((err) => {
      res.status(500).send({
        message: err.message
      });
    });
}

module.exports = controller;