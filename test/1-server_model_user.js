var expect    = require("chai").expect;
// Load required packages
var userModel = require('../models/user');

var user = {};
user.email = "email-test";
user.local_email = "local-email-test";
user.description = "descripción-test";
user.id_user = 1; 
user.name = "nombre-test";
user.description = "descripcion-test";

before(function () {
  process.env.NODE_ENV = 'test';
  require('../server.js');
});

describe('Testing Model User', function() {
	describe('#save()', function() {
		it('Guardado sin errores', function(done) {
		    userModel.save(user,function(err,data) {
				if (err) throw err;
				user.id = data.id;
				done();
		    });
		});
	});	
    
	describe('#update()', function() {
		it('Modificado sin errores', function(done) {
		    userModel.update(user, function(err, data) {
				if (err) throw err;
				done();
		    });
		});
	});	
	
	describe('#find()', function() {
		it('Encuentra usuarios asociados a la cuenta', function(done) {
			userModel.findUsersAccount(user.id , function(err, data) {
				if (err) throw err;
				done();
			});
		 
		});
	});
	  
	describe('#findById()', function() {
		it('Encuentra usuario por id', function(done) {
			userModel.findById(user.id, function(err, data) {
				if (err) throw err;
				done();
			});
		 
		});
	});
	
	describe('#delete()', function() {
		it('Eliminado sin errores', function(done) {
		    userModel.remove({ id: user.id}, function(err) {
				if (err) throw err;
				done();
		    });
		});
	});	
});