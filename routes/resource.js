var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var pen_controller = require('../controllers/pen'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// pens ROUTES /// 
 
// POST request for creating a pens.  
router.post('/pen', pen_controller.pen_create_post); 
 
// DELETE request to delete pens. 
router.delete('/pen/:id', pen_controller.pen_delete); 
 
// PUT request to update pens. 
router.put('/pen/:id', pen_controller.pen_update_put); 
 
// GET request for one pens. 
router.get('/pen/:id', pen_controller.pen_detail); 
 
// GET request for list of all pens items. 
router.get('/pen', pen_controller.pen_list); 

 /* GET detail costume page */ 
router.get('/detail', pen_controller.pen_view_one_Page); 
 
module.exports = router;

/* GET create pen page */ 
router.get('/create', pen_controller.pen_create_Page); 

/* GET create update page */ 
router.get('/update', pen_controller.pen_update_Page); 

/* GET delete pen page */ 
router.get('/delete', pen_controller.pen_delete_Page); 