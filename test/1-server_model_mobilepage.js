var expect    = require("chai").expect;
// Load required packages
var mobilepageModel = require('../models/mobilepage');

var mobilePage = {};
mobilePage.name =  "Nombre test";
mobilePage.description = "Description test";
mobilePage.html = "<h1>HTML test</h1>";
mobilePage.id_page = 1;
mobilePage.id_user = 1;
mobilePage.id = 1;

before(function () {
  process.env.NODE_ENV = 'test';
  require('../server.js');
});

describe('Testing Model MobilePage', function() {
	describe('#save()', function() {
		it('Guardado sin errores', function(done) {
		    mobilepageModel.save(mobilePage,function(err,data) {
				if (err) throw err;
				mobilePage.id=data.id
				done();
		    });
		});
	});	
    
	describe('#update()', function() {
		it('Modificado sin errores', function(done) {
		    mobilepageModel.update(mobilePage, function(err, data) {
				if (err) throw err;
				done();
		    });
		});
	});	
	
	describe('#find()', function() {
		it('Encuentra registros', function(done) {
			mobilepageModel.find({id_user:mobilePage.id_user, id_page:mobilePage.id_page}, function(err, rows) {
				if (err) throw err;
				done();
		    });
		});
	});
	  
	describe('#findById()', function() {
		it('Encuentra registro por id', function(done) {
			mobilepageModel.findById({id_user:mobilePage.id_user, id_page:mobilePage.id_page}, function(err, rows) {
				if (err) throw err;
				done();
		    });
		});
	});
	
	describe('#delete()', function() {
		it('Eliminado sin errores', function(done) {
		    mobilepageModel.remove({ id: mobilePage.id }, function(err) {
				if (err) throw err;
				done();
		    });
		});
	});	
});