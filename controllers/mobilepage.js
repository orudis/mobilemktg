// Load required packages
var mobilepageModel = require('../models/mobilepage');
var campaignModel = require('../models/campaign');

// Create endpoint /api/campain for POST
exports.postMobilepage = function(req, res) {
 
  // Set the  properties that came from the POST data
  var mobilePage = {};
  if(req.body.name!=null) mobilePage.name = req.body.name;
  if(req.body.description!=null) mobilePage.description = req.body.description;
  if(req.body.html!=null) mobilePage.html = req.body.html;
  if(req.body.id_page!=null) mobilePage.id_page = req.body.id_page;
    
  mobilePage.id_user = req.user.id;
  

  // Save the campain and check for errors
  mobilepageModel.save(mobilePage,function(err,insertedMobilePage) {
    if (err)
      res.send(err);

    res.json({ success:true, data: insertedMobilePage });
  });
};

// Create endpoint /api/mobilepages/children/:id for GET
exports.getMobilepages = function(req, res) {
    console.log('controllers.getMobilespages..............................');
  // Use the mobilePage model to find all mobile pages of campain
  mobilepageModel.find({id_user:req.user.id, id_page:req.params.id*1}, function(err, rows) {
    if (err)
      res.send(err);

    res.json(rows);
  });
};



// Create endpoint /api/mobilepages/:id_page for GET
exports.getMobilepage = function(req, res) {
    console.log("getMobilepage -- req.params.id:"+req.params.id);
  // Use the Campain model to find a specific campain
  //Campain.find({ userId: req.user._id, _id: req.params.campain_id }, function(err, campain) {
  mobilepageModel.findById({id:req.params.id,id_user:req.user.id }, function(err, row) {
    if (err)
      res.send(err);

    res.json(row);
  });
};

// Create endpoint /api/mobilepage for PUT
exports.putMobilepage = function(req, res) {
  console.log("controller.putMobilepage:"+JSON.stringify(req.body));
  // Set the Campain properties that came from the PUT data
  var mobilePage = {};
  mobilePage.id=req.body.id;
  if(req.body.name!=null) mobilePage.name = req.body.name;
  if(req.body.description!=null) mobilePage.description = req.body.description;
  if(req.body.html!=null) mobilePage.html = req.body.html;
  
  //mobilePage.user_id = req.user.id;
 
  //campain.userId = req.user._id;
  mobilepageModel.update(mobilePage, function(err, updatedMobilePage) {
    if (err)
      res.send(err);

    res.json({ success:true, data: updatedMobilePage });
  });
};

// Create endpoint /api/mobilepage/:id for DELETE
exports.deleteMobilepage = function(req, res) {
  
  mobilepageModel.remove({ id: req.params.id }, function(err) {
    if (err)
      res.send(err);
    res.json({ success:true,data:{id:req.params.id} });
  });
};