const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    res.send('hello world');
});

/*router.get('/signup', function(req, res){
    res.send('signup page');
});*/

module.exports = router;