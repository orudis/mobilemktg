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
  
 
  var mobilePage = {};
  mobilePage.name = "name test";
  mobilePage.description = "descripción test";
  mobilePage.html = "<h1>HTML test</h1>;
  mobilePage.id_page = 1;
  mobilePage.id_user = 1;
  
  it('respond to get /mobilepages/children/1', function(done){
    request(server)
      .get('/mobilepages/children/1')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res){
        if (err) return done(err);
        done()
      });
  })
  
  it('respond to get /mobilepages', function(done){
    request(server)
      .get('/mobilepages')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res){
        if (err) return done(err);
        done()
      });
  })
  
  it('respond to get /mobilepages/1', function(done){
    request(server)
      .get('/mobilepages/1')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res){
        if (err) return done(err);
        done()
      });
  })
  
  it('respond to post /mobilepages', function(done){
    request(server)
      .post('/mobilepages')
      .set('Accept', 'application/json')
	  .send(mobilePage)
      .expect(200)
      .end(function(err, res){
        if (err) return done(err);
        done()
      });
  })
  
  it('respond to put /mobilepages', function(done){
    request(server)
      .put('/mobilepages')
      .set('Accept', 'application/json')
	  .send(mobilePage)
      .expect(200)
      .end(function(err, res){
        if (err) return done(err);
        done()
      });
  })
  
  it('respond to delete /mobilepages', function(done){
    request(server)
      .del('/mobilepages/1')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res){
        if (err) return done(err);
        done()
      });
  })
  
});