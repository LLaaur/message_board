var express = require('express');
var router = express.Router();

const messages = [

  {
    text: "yo wasup",
    user: "laur",
    date: new Date()
  },
  {
    text: "trop trop",
    user: "maharajah",
    date: new Date()
  }

]


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "message board", messages: messages});
});

module.exports = router;
