// Load required packages
var express = require('express');

var campaignController = require('../controllers/campaign');

// Create our Express router
var router = express.Router();

// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
	if (req.isAuthenticated())
		return next();

	res.redirect('/');
}

// Create endpoint handlers for /campaigns
router.route('/campaigns')
  .get(isLoggedIn, campaignController.getCampaigns)
  .post(isLoggedIn, campaignController.postCampaign)
  .put(isLoggedIn, campaignController.putCampaign)
  
  
  router.route('/campaigns/:id')
  .get(isLoggedIn, campaignController.getCampaign)
  .delete(isLoggedIn, campaignController.deleteCampaign)
  
module.exports = router;