const posts = require('./model');

const controller = {};

// routes =>

/* ------------------- INDEX -------------------*/
// GET  "/"                     => greetings

controller.welcome = (req, res) => {
  console.log('-- GET /all --');
  res.send("hi, you're at the posts api");
}

/* ------------------- INDEX -------------------*/
// GET  "/all"                     => show all books

controller.getAll = (req, res) => {
  console.log("-- GET /all --");
  posts.find()
    // modify the next line based on your project's needs
    .then((dbResponse) => { res.send(dbResponse) })
    .catch((err) => {
      res.status(500).send({
        message: err.message
      });
    });
}

/* ------------------- CREATE -------------------*/
// GET  "/add"                => instructions
// POST "/add"                => Create new books

controller.getAdd = (req, res) => {
  console.log("-- GET /add --");
  res.send('put a new author\'s title in the body and send a post request to this address: { title: "string" }. you\'ll get back the new author\'s entry');
}

controller.createPost = (req, res) => {
  console.log("-- POST /add --");
  const newTitle = req.body.title;
  const newPost = { title: newTitle };
  post.create(newPost)
    // modify the next line based on your project's needs
    .then((dbResponse) => { res.send(dbResponse) })
    .catch((err) => {
      res.status(500).send({
        message: err.message
      });
    });
}


/* ------------------- READ -------------------*/
// GET  "/:id"             => View posts Info with id ...


controller.getId = (req, res) => {
  const postId = req.query.id;
  console.log("-- GET /" + postId);
  const idObject = { Id: postId };
  post.findByID(idObject)
    // modify the next line based on your project's needs
    .then((dbResponse) => { res.send(dbResponse) })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message: err.message
      });
    });
}


/* ------------------- DELETE -------------------*/
// GET  "/:id/delete"     => instructions
// POST "/:id/delete"     => delete books with id...


controller.getIdDelete = (req, res) => {
  const postId = req.query.id;
  console.log("-- GET /" + postId + "/delete --");
  res.send('send a post request to this address with an post ID, it will be deleted');
}

controller.postIdDelete = (req, res) => {
  const postId = req.query.id;
  console.log("-- POST /" + postId + "/delete --");
  const idObject = { _id: postId };
  post.remove(idObject)
    // modify the next line based on your project's needs
    .then((dbResponse) => { res.send(dbResponse) })
    .catch((err) => {
      res.status(500).send({
        message: err.message
      });
    });
}


module.exports = controller;