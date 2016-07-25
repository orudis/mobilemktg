// Load required packages
var mobilepageModel = require('../models/mobilepage');
var campaignModel = require('../models/campaign');
var userModel = require('../models/user');

// Create endpoint /api/user for GET
exports.getUserAuth = function(req, res) {
  // User authenticated
  res.json(req.user);
  
};


// Create endpoint /api/accounts for GET all
exports.getAccounts= function(req, res) {
  // Use the User model to find all users accounts
  userModel.findById(function(err, data) {
    if (err)
      res.send(err);

    res.json(data);
  });
};


// Create endpoint /api/accounts/:id for GET
exports.getAccount = function(req, res) {
  // Use the User model to find a specific account
  userModel.findById({id:req.user.id}, function(err, data) {
    if (err)
      res.send(err);

    res.json(data);
  });
};

// Create endpoint /api/accounts/users for GET
exports.getUsersAccount = function(req, res) {
  // Use the User model to find a specific account
  userModel.findUsersAccount({id:req.user.id}, function(err, data) {
    if (err)
      res.send(err);

    res.json(data);
  });
};

// Create endpoint /api/accounts/:id for DELETE
exports.deleteAccount = function(req, res) {
  // Use the User model to find a specific account
 /* userModel.removeUsersAccount({id:req.user.id}, function(err, data) {
    if (err)
      res.send(err);

    res.json(data);
  });
  */
};