var express = require('express');
var router = express.Router();

/* GET All Chats page. */
router.get('/', function(req, res, next) {
    res.send('Chats Index');
  //res.send('Hello World');
});

/* GET Individual Chats By ID. */
router.get('/something', function(req, res, next) {
    res.send('Chats - One on One');
  //res.send('Hello World');
});

module.exports = router;
