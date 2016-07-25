// Load required packages
var expect    = require("chai").expect;
var userController = require('../controllers/user');

var req={};
req.user={id:1};
req.user.name = "name test";
req.user.description = "description test";

res={};




describe('Testing Controller Account', function() {
	describe('#getAccounts()', function() {
		it('getAccounts within error', function(done) {
		     userController.getAccounts(req,res,function(err,data) {
				if (err) throw err;
				done();
		    });
		});
	});	
    
	describe('#getAccount()', function() {
		it('getAccount within error', function(done) {
		    userController.getAccount(req,res,function(err,data) {
				if (err) throw err;
				done();
		    });
		});
	});	
	
	describe('#getUsersAccount()', function() {
		it('getUsersAccount within error', function(done) {
		    userController.getUsersAccount(req,res,function(err,data) {
				if (err) throw err;
				done();
		    });
		});
	});
	  
});