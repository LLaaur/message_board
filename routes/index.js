var express = require('express');
var router = express.Router();

const messages = [

  {
    text: "yo wasup",
    user: "laur",
  },
  {
    text: "trop trop",
    user: "maharajah",
  }

]

router.post('/new', (req, res, next) => {
  messages.unshift({
    text: req.body.text,
    user: req.body.user,
  })
  res.redirect('/') // go back to a previous page
});



router.get('/new', (req, res, next) => {
  res.render('form')
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "message board", messages: messages});
});

module.exports = router;
