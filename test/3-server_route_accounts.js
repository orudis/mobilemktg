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
  
  it('respond to get /accounts/users', function(done){
    request(server)
      .get('/accounts/users')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res){
        if (err) return done(err);
        done()
      });
  })
  
  it('respond to get /accounts', function(done){
    request(server)
      .get('/accounts')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res){
        if (err) return done(err);
        done()
      });
  })
  
  it('respond to get /accounts/1', function(done){
    request(server)
      .get('/accounts/1')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res){
        if (err) return done(err);
        done()
      });
  })
  
  it('respond to delete /accounts', function(done){
    request(server)
      .del('/accounts/1')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res){
        if (err) return done(err);
        done()
      });
  })
  
});