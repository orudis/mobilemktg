// Load required packages
var expect    = require("chai").expect;
var campaignController = require('../controllers/campaign');

var req={};
req.user={id:1};

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
body.id_page = req.body.id_page;
body.id_user = req.user.id;

describe('Testing Controller Campaign', function() {
	describe('#getCampaigns()', function() {
		it('Get All within error', function(done) {
		     campaignController.getCampaigns(req,res,function(err,data) {
				if (err) throw err;
				done();
		    });
		});
	});	
    
	describe('#getCampaign()', function() {
		it('Get within error', function(done) {
		    campaignController.getCampaign(req,res,function(err,data) {
				if (err) throw err;
				done();
		    });
		});
	});	
	
	describe('#postCampaign()', function() {
		it('Post within error', function(done) {
		    campaignController.postCampaign(req,res,function(err,data) {
				if (err) throw err;
				done();
		    });
		});
	});
	  
	describe('#putCampaign()', function() {
		it('Put within error', function(done) {
		    campaignController.putCampaign(req,res,function(err,data) {
				if (err) throw err;
				done();
		    });
		 
		});
	});
	
	describe('#deleteCampaign()', function() {
		it('Put within error', function(done) {
		    campaignController.deleteCampaign(req,res,function(err,data) {
				if (err) throw err;
				done();
		    });
		});
	});	
});