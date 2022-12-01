var express = require('express');
const pen_controlers=require('../controllers/pen');
var router = express.Router();
const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
}
/* GET pen */
router.get('/', pen_controlers.pen_view_all_Page );
/* GET detail machine page */
router.get('/detail', pen_controlers.pen_view_one_Page);
/* GET create machine page */
router.get('/create', secured, pen_controlers.pen_create_Page);
/* GET create update page */
router.get('/update', secured, pen_controlers.pen_update_Page);
/* GET delete machine page */
router.get('/delete', secured, pen_controlers.pen_delete_Page);
module.exports = router;