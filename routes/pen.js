var express = require('express');
const pen_controller = require('../controllers/pen');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pen', { title: 'Search Results'});
});

router.get('/', pen_controller.pen_view_all_Page);



router.get('/detail', async function (req, res) {
  console.log("single view for id " + req.query.id)
  try {
      result = await pen.findById(req.query.id)
      res.render('pendetail', {
          title: 'pen Detail',
          toShow: result
      });
  } catch (err) {
      res.status(500)
      res.send(`{'error': '${err}'}`);
  }
});

module.exports = router;
