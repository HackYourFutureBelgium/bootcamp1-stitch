const newLearning = require('./model');

const controller = {};

controller.createNewLearning = (req, res) => {
    const NewLearning = { 
        userid: req.body.userid,
        topic: req.body.topic,
    };

    newLearning.create(NewLearning)
      .then((dbResponse) => { res.send(dbResponse) })
      .catch((err) => {
        res.status(500).send({
          message: err.message
        });
      });
  }

controller.NewLearningDelete = (req, res) => {
    const NewLearningId = req.params.id;
    const idObject = { _id: NewLearningId };
    newLearning.deleteOne(idObject)
      
      .then((dbResponse) => { res.send(dbResponse) })
      .catch((err) => {
        res.status(500).send({
          message: err.message
        });
      });
  }

//
  controller.getnewlearning = (req, res) => {
    newLearning.find()
      .then((dbResponse) => { res.send(dbResponse) })
      .catch((err) => {
        res.status(500).send({
          message: err.message
        });
      });
  }

  module.exports = controller;