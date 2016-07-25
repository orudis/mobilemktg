// Load required packages
var express = require('express');

var configController = require('../controllers/config');

// Create our Express router
var router = express.Router();

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated())
		return next();

	res.redirect('/');
}

// Create endpoint handlers for /user for get autenticated user
router.route('/config')
  .get(isLoggedIn, configController.getConfig);
  
  
module.exports = router;