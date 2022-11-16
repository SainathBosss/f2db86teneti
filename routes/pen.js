var express = require('express');
const { pen_view_one_Page } = require('../controllers/pen');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pens', { title: 'Search Results'});
});
router.get('/detail', pen.pen_view_one_Page);

module.exports = router;
