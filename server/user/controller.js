const User = require('./model');
const bcrypt = require('bcrypt');


const controller = {};

controller.findAll = (req, res) => {
 console.log("all found")
  User.find()
    .then((dbResponse) => { res.send(dbResponse) })
    .catch((err) => {
      res.status(500).send({
        message: err.message
      });
    });
}

controller.signUp = (req, res) => {
  const newUser = {
    firstName: req.body.firstName,
    email: req.body.email,
    about: req.body.about,
    password: req.body.password,
    img: req.body.img,
    status: req.body.status
  };

  User.findOne({
    email: req.body.email
  })
  .then(user => {
    if(!user) {
      bcrypt.hash(req.body.password, 10, (err, hash) =>{
        newUser.password = hash
        User.create(newUser)
        .then((dbResponse) => { res.send(dbResponse) })
    .catch((err) => {
      res.status(500).send({
        message: err.message
      });
      })
  })
    }else{
      res.json({error: 'User already exists'})
    }
  })
    .catch(err => {
      res.send('error: ' + err)
    });
}

controller.update = (req, res) => {
  console.log("-- POST /Update --");

  const UserId = req.params.id;
  //const UserId = req.params.id;
  console.log("post User id = " + UserId + "value");
  const idObject = { _id: UserId };

  const updatedUser = {
    firstName: req.body.firstName,
    email: req.body.email,
    about: req.body.about,
    img: req.body.img,
    status: req.body.status
  };
  User.findOneAndUpdate(idObject, updatedUser, {
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
  const UserId = req.params.id;
  console.log("-- DELETE /" + UserId + "/delete --");
  const idObject = { _id: UserId };
  User.deleteOne(idObject)
    .then((dbResponse) => { res.send(dbResponse) })
    .catch((err) => {
      res.status(500).send({
        message: err.message
      });
    });
}

module.exports = controller;
