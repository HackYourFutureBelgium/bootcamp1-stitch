const notification = require('./model');

const controller = {};

controller.createNotification = (req, res) => {
      const newNotification = { 
      date: req.body.date,
      receiverid: req.body.receiverid,
      senderid: req.body.senderid,
      notifRequestType:req.body.notifRequestType
    };

    notification.create(newNotification)
      .then((dbResponse) => { res.send(dbResponse) })
      .catch((err) => {
        res.status(500).send({
          message: err.message
        });
      });
  }

controller.deleteNotification = (req, res) => {
    const notificationId = req.params.id;
    const idObject = { _id: notificationId };
    notification.deleteOne(idObject)
      .then((dbResponse) => { res.send(dbResponse) })
      .catch((err) => {
        res.status(500).send({
          message: err.message
        });
      });
  }
  
  controller.getNotification = (req, res) => {
    notification.find()
      .then((dbResponse) => { res.send(dbResponse) })
      .catch((err) => {
        res.status(500).send({
          message: err.message
        });
      });
  }

  /*controller.getOneNotification = (req, res) => {
    const notificationId = req.params.id;
    const idObject = { _id: notificationId };
    notification.find(idObject)
      .then((dbResponse) => { res.send(dbResponse) })
      .catch((err) => {
        res.status(500).send({
          message: err.message
        });
      });
  }*/

  module.exports = controller;