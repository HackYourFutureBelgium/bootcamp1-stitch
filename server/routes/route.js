const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');


const user = [];

router.use(bodyParser.json());


router.get('/', function (req, res) {
  res.send('Home Page');
});

router.get('/signup', function (req, res) {
  res.send('signup page');
});

router.post('/signup', function (req, res) {
  user.push(res.body);
  res.send(res.body);
  console.log(req.body);
});


// router.get('/login', function (req, res) {
//   res.send('login page');
// });
// router.get('/profilewithskill', function (req, res) {
//   res.send('profile with skill page');
// });
// router.get('/connections', function (req, res) {
//   res.send('connection page');
// });
// router.get('/signin', function (req, res) {
//   res.send('sign in page');
// });
// router.get('/profilewithskilladdtimeline', function (req, res) {
//   res.send('profile with skill add time line page');
// });

module.exports = router;