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
  

  it('respond to get /q/1', function(done){
    request(server)
      .get('/q/1')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res){
        if (err) return done(err);
        done()
      });
  })
  
  it('respond to get /n/1', function(done){
    request(server)
      .get('/n/1')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res){
        if (err) return done(err);
        done()
      });
  })
  
  it('respond to get /s/1', function(done){
    request(server)
      .get('/s/1')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res){
        if (err) return done(err);
        done()
      });
  })
  
  
});