var expect    = require("chai").expect;
// Load required packages
var campaign = require('../models/campaign');

var campaign = {};
campaign.name = "Nombre test";
campaign.description = "Description test";
campaign.img_bg = "";
campaign.img_logo = "";
campaign.img_qr = "";  
campaign.custom_qr_svg = ""; 
campaign.custom_qr_json = "";
campaign.id = 1;
campaign.id_page = req.body.id_page;
campaign.id_user = req.user.id;

before(function () {
  process.env.NODE_ENV = 'test';
  require('../server.js');
});

describe('Testing Model Campaign', function() {
	describe('#save()', function() {
		it('Guardado sin errores', function(done) {
		    Campaign.save(campaign,function(err,data) {
				if (err) throw err;
				campaign.id = data.id;
				done();
		    });
		});
	});	
    
	describe('#update()', function() {
		it('Modificado sin errores', function(done) {
		    Campaign.update(campaign, function(err, data) {
				if (err) throw err;
				done();
		    });
		});
	});	
	
	describe('#find()', function() {
		it('Encuentra registros', function(done) {
		  Campaign.find({id_user:campaign.id_user }, function(err, data) {
				if (err) throw err;
				done();
		  });
		 
		});
	});
	  
	describe('#findById()', function() {
		it('Encuentra registro por id', function(done) {
		  Campaign.findById({id_campaign:campaign.id,id_user:campaign.id_user}, function(err, data) {
				if (err) throw err;
				done();
		  });
		 
		});
	});
	
	describe('#delete()', function() {
		it('Eliminado sin errores', function(done) {
		      Campaign.remove({ id: campaign.id,id_user:campaign.id_user }, function(err) {
				if (err) throw err;
				done();
		    });
		});
	});	
});