const post = require('./model');

const controller = {};

controller.createPost = (req, res) => {
  console.log("-- POST /postOnMyTimeLine --");

  const newPost = {
    skill: req.body.skill,
    title: req.body.title,
    url: req.body.url,
    desc: req.body.desc,
    date: req.body.date,
    receiverid: req.body.receiverid,
    senderid: req.body.senderid
  };

  post.create(newPost)
    .then((dbResponse) => { res.send(dbResponse) })
    .catch((err) => {
      res.status(500).send({
        message: err.message
      });
    });
}

controller.postIdDelete = (req, res) => {
  const postId = req.params.id;
  console.log("-- POST /" + postId + "/delete --");
  const idObject = { _id: postId };
  post.deleteOne(idObject)

    .then((dbResponse) => { res.send(dbResponse) })
    .catch((err) => {
      res.status(500).send({
        message: err.message
      });
    });
}

controller.getPost = (req, res) => {
  post.find()
    .then((dbResponse) => { res.send(dbResponse) })
    .catch((err) => {
      res.status(500).send({
        message: err.message
      });
    });
}

module.exports = controller;