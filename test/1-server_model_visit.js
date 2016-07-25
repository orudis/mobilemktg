var expect    = require("chai").expect;
var geoip = require('geoip-lite');
var mobileDetect = require('mobile-detect')
var moment=require('moment');
// Load required packages
var visitModel = require('../models/visit');

var visit={};
visit.trigger='qr-test';
visit.mobile= md.mobile() ;
visit.tablet=md.tablet();
visit.phone= md.phone();
//visit.userAgent=md.userAgent();
visit.os= md.os();
visit.isIphone= md.is('iPhone') ;
visit.isBot= md.is('bot');
visit.version= md.version('Webkit');
visit.versionStr=md.versionStr('Build')

visit.country= geo.country;
visit.region= geo.region;
visit.city= geo.city;

visit.long=geo.ll[0];
visit.lat=geo.ll[1];
visit.userAgent=md.ua;
visit.date= moment();
visit.time=moment().format('HH:mm:ss');
visit.id_page=1;

before(function () {
  process.env.NODE_ENV = 'test';
  require('../server.js');
});

describe('Testing Model Visit', function() {
	describe('#save()', function() {
		it('Guardado sin errores', function(done) {
		    visitModel.save(visit,function(err,data) {
				if (err) throw err;
				visit.id = data.id;
				done();
		    });
		});
	});	
    
	
	describe('#find()', function() {
		it('Encuentra registros', function(done) {
		  visitModel.find({id_page:visit.id_page }, function(err, data) {
				if (err) throw err;
				done();
		  });
		 
		});
	});
	
	describe('#statist()', function() {
		it('Calcula estadísticas', function(done) {
		  visitModel.statist({id_page:visit.id_page }, function(err, data) {
				if (err) throw err;
				done();
		  });
		 
		});
	});
	  
	
});