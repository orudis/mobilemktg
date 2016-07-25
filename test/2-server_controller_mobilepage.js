// Load required packages
var expect    = require("chai").expect;
var mobilepageController = require('../controllers/mobilepage');

var req={};
req.user={id:1};
req.params={id:1};

res={};

var body = {};
body.name = "Nombre test";
body.description = "Description test";
body.img_bg = "";
body.img_logo = "";
body.img_qr = "";  
body.custom_qr_svg = ""; 
body.custom_qr_json = "";
body.id = 1;
body.id_page = req.params;
body.id_user = req.user.id;

describe('Testing Controller Mobilepage', function() {
	describe('#getMobilepages()', function() {
		it('Get All within error', function(done) {
		     mobilepageController.getMobilepages(req,res,function(err,data) {
				if (err) throw err;
				done();
		    });
		});
	});	
    
	describe('#getMobilepage()', function() {
		it('Get within error', function(done) {
		    mobilepageController.getMobilepage(req,res,function(err,data) {
				if (err) throw err;
				done();
		    });
		});
	});	
	
	describe('#postMobilepage()', function() {
		it('Post within error', function(done) {
		    mobilepageController.postMobilepage(req,res,function(err,data) {
				if (err) throw err;
				done();
		    });
		});
	});
	  
	describe('#putMobilepage()', function() {
		it('Put within error', function(done) {
		    mobilepageController.putMobilepage(req,res,function(err,data) {
				if (err) throw err;
				done();
		    });
		 
		});
	});
	
	describe('#deleteMobilepage()', function() {
		it('Put within error', function(done) {
		    mobilepageController.deleteMobilepage(req,res,function(err,data) {
				if (err) throw err;
				done();
		    });
		});
	});	
});