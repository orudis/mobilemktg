// Load required packages
var config=require('../config/connections');

// Create endpoint /api/config for GET
exports.getConfig = function(req, res) {
  // Host server
  res.json({'host':config.server});
  
};