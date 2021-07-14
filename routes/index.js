var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ChatLog Project' ,
                       homeMessage: "Home Page Content"
});
  //res.send('Hello World');
});

module.exports = router;
