// Load required packages
var mobilepageModel = require('../models/mobilepage');
var campaignModel = require('../models/campaign');
var userModel = require('../models/user');

// Create endpoint /api/user for GET
exports.getUserAuth = function(req, res) {
  // User authenticated
  res.json(req.user);
  
};



// Create endpoint /api/campaigns for GET all
exports.getUsers= function(req, res) {
  // Use the Campain model to find all campaign
  userModel.findUsersAccount(req.user.id , function(err, data) {
    if (err)
      res.send(err);

    res.json(data);
  });
};

// Create endpoint /api/users/:id for GET
exports.getUser = function(req, res) {
  // Use the User model to find a specific campaign
  userModel.findById(req.user.id, function(err, data) {
    if (err)
      res.send(err);

    res.json(data);
  });
};

// Create endpoint /api/users for POST
exports.postUser = function(req, res) {
  // Set the User properties that came from the POST data
  var user = {};
  user.email = req.body.email;
  user.local_email = req.body.email;
  user.description = req.body.description;
  user.id_user = req.user.id;
  
  if(req.body.name!=null) user.name = req.body.name;
  if(req.body.description!=null) user.description = req.body.description;
  
  
  
  // Save the campain and check for errors
  userModel.save(user,function(err,data) {
    if (err)
      res.send(err);

    res.json({ success:true, data: data });
  });
};

// Create endpoint /api/users for PUT
exports.putUser = function(req, res) {
  // Set the User properties that came from the PUT data
  var user = {};
  user.description = req.body.description;
  user.id = req.body.id;
  
  userModel.update(user, function(err, data) {
    if (err)
      res.send(err);

    res.json({ success:true, data: user });
  });
};

// Create endpoint /api/users/:id for DELETE
exports.deleteUser = function(req, res) {
  
  userModel.remove({ id: req.params.id}, function(err) {
    if (err)
      res.send(err);

    res.json({ success:true,data:{id:req.params.id} });
  });
};