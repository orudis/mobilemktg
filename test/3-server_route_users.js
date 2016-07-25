var request = require('supertest');
require = require('really-need');

describe('loading express', function () {
  var server;
  
  beforeEach(function () {
    server = require('../server', { bustCache: true });
  });
  
  afterEach(function (done) {
    server.close(done);
  });
  
 
  var user = {};
  user.email = "email test";
  user.local_email = "email local test";
  user.description = "descripción test";
  user.id_user = 1;
  
  user.name = "name test";
  user.description = "description test";
  
  it('respond to get /user', function(done){
    request(server)
      .get('/user')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res){
        if (err) return done(err);
        done()
      });
  })
  
  it('respond to get /users', function(done){
    request(server)
      .get('/users')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res){
        if (err) return done(err);
        done()
      });
  })
  
  it('respond to get /users/1', function(done){
    request(server)
      .get('/users/1')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res){
        if (err) return done(err);
        done()
      });
  })
  
  it('respond to post /users', function(done){
    request(server)
      .post('/users')
      .set('Accept', 'application/json')
	  .send(user)
      .expect(200)
      .end(function(err, res){
        if (err) return done(err);
        done()
      });
  })
  
  it('respond to put /users', function(done){
    request(server)
      .put('/users')
      .set('Accept', 'application/json')
	  .send(user)
      .expect(200)
      .end(function(err, res){
        if (err) return done(err);
        done()
      });
  })
  
  it('respond to delete /users', function(done){
    request(server)
      .del('/users/1')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res){
        if (err) return done(err);
        done()
      });
  })
  
});