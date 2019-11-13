const user = require('./model');

const controller = {};

controller.findAll = (req, res) => {
  user.find()
    .then((dbResponse) => { res.send(dbResponse) })
    .catch((err) => {
      res.status(500).send({
        message: err.message
      });
    });
}

controller.signUp = (req, res) => {
  console.log("-- POST /user --");

  const newUser = {
    firstName: req.body.firstName,
    email: req.body.email,
    about: req.body.about,
    password: req.body.password,
    img: req.body.img,
    status: req.body.status
  };
  user.create(newUser)
    .then((dbResponse) => { res.send(dbResponse) })
    .catch((err) => {
      res.status(500).send({
        message: err.message
      });
    });
}

controller.update = (req, res) => {
  console.log("-- POST /Update --");

  const userId = req.params.id;
  //const userId = req.params.id;
  console.log("post user id = " + userId + "value");
  const idObject = { _id: userId };

  const updatedUser = {
    firstName: req.body.firstName,
    email: req.body.email,
    about: req.body.about,
    img: req.body.img,
    status: req.body.status
  };
  user.findOneAndUpdate(idObject, updatedUser, {
    new: true
  })
    .then((dbResponse) => { res.send(dbResponse) })
    .catch((err) => {
      res.status(500).send({
        message: err.message
      });
    });
}

controller.postIdDelete = (req, res) => {
  const userId = req.params.id;
  console.log("-- DELETE /" + userId + "/delete --");
  const idObject = { _id: userId };
  user.deleteOne(idObject)
    .then((dbResponse) => { res.send(dbResponse) })
    .catch((err) => {
      res.status(500).send({
        message: err.message
      });
    });
}

module.exports = controller;
