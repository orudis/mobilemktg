// Load required packages
var expect    = require("chai").expect;
var triggerpageController = require('../controllers/triggerPage');

var req={};
req.params={code:1};
res={};

describe('Testing Controller TriggerPage', function() {
	describe('#getTriggerPagesQr()', function() {
		it('getTriggerPagesQr All within error', function(done) {
		     triggerpageController.getTriggerPagesQr(req,res,function(err,data) {
				if (err) throw err;
				done();
		    });
		});
	});	
    
	describe('#getTriggerPagesNfc()', function() {
		it('getTriggerPagesNfc within error', function(done) {
		    triggerpageController.getTriggerPagesNfc(req,res,function(err,data) {
				if (err) throw err;
				done();
		    });
		});
	});	
	
	describe('#getTriggerPagesShort()', function() {
		it('getTriggerPagesShort within error', function(done) {
		    triggerpageController.getTriggerPagesShort(req,res,function(err,data) {
				if (err) throw err;
				done();
		    });
		});
	});
	  

});