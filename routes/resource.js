var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var pens_controller = require('../controllers/pen'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// pens ROUTES /// 
 
// POST request for creating a pens.  
router.post('/pen', pens_controller.pen_create_post); 
 
// DELETE request to delete pens. 
router.delete('/pen/:id', pens_controller.pen_delete); 
 
// PUT request to update pens. 
router.put('/pen/:id', pens_controller.pen_update_put); 
 
// GET request for one pens. 
router.get('/pen/:id', pens_controller.pen_detail); 
 
// GET request for list of all pens items. 
router.get('/pen', pens_controller.pen_list); 
 
module.exports = router; 