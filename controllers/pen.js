var pen = require('../models/pen');
// List of all pen
exports.pen_list = async function (req, res) {
    try {
        results = await pen.find();
        res.send(results);
    } catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};

// for a specific pen.
// for a specific pen.
exports.pen_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        results = await pen.findById(req.params.id)
        res.send(results)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle pen update form on PUT.
exports.pen_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await pen.findById(req.params.id)
        // Do updates of properties
        if (req.body.pen_ink) toUpdate.pen_ink = req.body.pen_ink;
        if (req.body.pen_brand) toUpdate.pen_brand = req.body.pen_brand;
        if (req.body.pen_cost) toUpdate.pen_cost = req.body.pen_cost;
        let results = await toUpdate.save();
        console.log("Success " + results)
        res.send(results)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
};


// Handle pen create on POST.
exports.pen_create_post = async function (req, res) {
    console.log(req.body)
    try {
        let document = new pen();
        
        document.pen_ink = req.body.pen_ink;
        document.pen_brand = req.body.pen_brand;
        document.pen_cost = req.body.pen_cost;

        let results = await document.save();
        res.send(results);
    } catch (err) {
        // console.log(err);
        res.status(500);
        res.send(`{"error": ${err}}`);
        
    }
};
// Handle pen delete on DELETE.
exports.pen_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        results = await pen.findByIdAndDelete(req.params.id)
        console.log("Removed " + results)
        res.send(results)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};


// VIEWS
// Handle a show all view
exports.pen_view_all_Page = async function (req, res) {
    try {
        results = await pen.find();
        res.render('pen', {
            title: 'pen Search Results',
            results: results
        });
    } catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};
// Handle a show one view with id specified by query
exports.pen_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        results = await pen.findById(req.query.id)
        res.render('pendetail', {
            title: 'pen Detail',
            toShow: results
        });
    } catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for creating a tree.
// No body, no in path parameter, no query.
// Does not need to be async
exports.pen_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('pencreate', {
            title: 'pen Create'
        });
    } catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for updating a pen.
// query provides the id
exports.pen_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let results = await pen.findById(req.query.id)
        res.render('penupdate', {
            title: 'pen Update',
            toShow: results
        });
    } catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle a delete one view with id from query
exports.pen_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        results = await pen.findById(req.query.id)
        res.render('pendelete', {
            title: 'pen Delete',
            toShow: results
        });
    } catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle a show one view with id specified by query 
exports.pen_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        results = await pen.findById( req.query.id) 
        res.render('pendetail',  
{ title: 'pen Detail', toShow: results }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 


// Handle building the view for updating a pen. 
// query provides the id 
exports.pen_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let results = await pen.findById(req.query.id) 
        res.render('penupdate', { title: 'pen Update', toShow: results }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a delete one view with id from query 
exports.pen_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        results = await pen.findById(req.query.id) 
        res.render('pendelete', { title: 'pen Delete', toShow: 
        results }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 