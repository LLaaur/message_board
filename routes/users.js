var express = require('express');
var router = express.Router();


router.get('/users', function(req, res, next) {
    res.render("send a resource");
});
  
module.exports = router;