// Load required packages
var expect    = require("chai").expect;
var userController = require('../controllers/user');

var req={};
req.user={id:1};
req.user.name = "name test";
req.user.description = "description test";

res={};

var body = {};
body.email = "email test";
body.local_email = "email test";
body.description = "Descripción test";
body.id_user = req.user.id;



describe('Testing Controller Campaign', function() {
	describe('#getUsers()', function() {
		it('getUsers within error', function(done) {
		     userController.getUsers(req,res,function(err,data) {
				if (err) throw err;
				done();
		    });
		});
	});	
    
	describe('#getUser()', function() {
		it('getUser within error', function(done) {
		    userController.getUser(req,res,function(err,data) {
				if (err) throw err;
				done();
		    });
		});
	});	
	
	describe('#postUser()', function() {
		it('postUser within error', function(done) {
		    userController.postUser(req,res,function(err,data) {
				if (err) throw err;
				done();
		    });
		});
	});
	  
	describe('#putUser()', function() {
		it('putUser within error', function(done) {
		    userController.putUser(req,res,function(err,data) {
				if (err) throw err;
				done();
		    });
		 
		});
	});
	
	describe('#deleteUser()', function() {
		it('deleteUser within error', function(done) {
		    userController.deleteUser(req,res,function(err,data) {
				if (err) throw err;
				done();
		    });
		});
	});	
});