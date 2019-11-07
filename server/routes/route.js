const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const { DB_URI } = process.env;
mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connection established");
  }
  )
  .catch((err) => {
    console.error(err);
  });

const userProfile = new mongoose.Schema({
  name: { type: String, default: "NULL" },
  email: { type: String, default: "NULL" }
})

const profile = mongoose.model("profile", userProfile);


router.get('/', (req, res) => {
  res.send('HOME PAGE');
});

router.get('/search', (req, res) => {

  profile.find().then(xyz => res.send(xyz));


});

router.post('/signup', (req, res) => {
  //res.send('signup page');
  profile.create(req.body)
    .then(profilecreated => res.send(profilecreated))
    .catch((err) => {
      console.error(err);
    });
});

router.get('/connection', (req, res) => {
  res.send('connection_info');

});
router.put('/post', (req, res) => {
  res.send('added to you timeline');

});
router.delete('/deletepost', (req, res) => {
  res.send('deleted post');

});

/*router.delete('/notification', (req, res) => {
    res.send('deleted post');

});*/

router.put('/update', (req, res) => {
  res.send('added to you timeline');

});


module.exports = router;