const connection = require('./model');

const controller = {};

controller.createConnection = (req, res) => {
    console.log("-- POST /createConnection --");
    
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
    const connectionId = req.query.id;
    console.log("-- POST /" + connectionId + "/delete --");
    const idObject = { _id: connectionId };
    console.log("-- idObject" +idObject);
    
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
    //const userid = req.query.userid;
    connection.find()
      .then((dbResponse) => { res.send(dbResponse) })
      .catch((err) => {
        res.status(500).send({
          message: err.message
        });
      });
  }

  module.exports = controller;