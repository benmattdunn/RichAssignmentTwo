var express = require('express');
var router = express.Router();

/* GET home page.
 * partials for buiness pages. NOT user accounts.
  *
  * */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
