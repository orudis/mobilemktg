// Load required packages
var express = require('express');

var triggerPageController = require('../controllers/triggerPage');

// Create our Express router
var router = express.Router();

// Create endpoint handlers for trigger pages
router.route('/q/:code')
  .get(triggerPageController.getTriggerPagesQr);
  
router.route('/n/:code')
  .get(triggerPageController.getTriggerPagesNfc);
  
router.route('/s/:code')
  .get(triggerPageController.getTriggerPagesShort);  
  

  
module.exports = router;