
var expect    = require("chai").expect;
var converter = require("./codigoprueba/converter");
// Load required packages
var campaign = require('../models/campaign');


  describe('Model Campaign', function() {
	  describe('#find()', function() {
		it('Encuentra registros', function(done) {
		  Campaign.find({id_user:req.user.id }, function(err, data) {
				if (err) throw err;
				done();
		  });
		 
		});
	  });
	  
	  describe('#find()', function() {
		it('Encuentra registros', function(done) {
		  Campaign.find({id_user:req.user.id }, function(err, data) {
				if (err) throw err;
				done();
		  });
		 
		});
	  });
});