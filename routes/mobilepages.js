// Load required packages
var express = require('express');

var mobilepagesController = require('../controllers/mobilepage');

// Create our Express router
var router = express.Router();

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated())
		return next();

	res.redirect('/');
}

// Create endpoint handlers for /mobilepages
router.route('/mobilepages/children/:id')
  .get(isLoggedIn, mobilepagesController.getMobilepages);

router.route('/mobilepages')
  .post(isLoggedIn, mobilepagesController.postMobilepage)
  .put(isLoggedIn, mobilepagesController.putMobilepage)
  .delete(isLoggedIn, mobilepagesController.deleteMobilepage);
  
router.route('/mobilepages/:id')
  .get(isLoggedIn, mobilepagesController.getMobilepage)
  .delete(isLoggedIn, mobilepagesController.deleteMobilepage);


  
module.exports = router;