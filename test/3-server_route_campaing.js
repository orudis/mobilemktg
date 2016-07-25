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
  
  var campaign={};
  campaign.name = "Nombre test";
  campaign.description = "Description test";
  campaign.img_bg = "";
  campaign.img_logo = "";
  campaign.img_qr = "";  
  campaign.custom_qr_svg = ""; 
  campaign.custom_qr_json = "";
  campaign.id = 1;
  campaign.id_page = 1;
  campaign.id_user = 1;
  
  it('respond to get /campaign', function(done){
    request(server)
      .get('/campaign')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res){
        if (err) return done(err);
        done()
      });
  })
  
  it('respond to get /campaign/1', function(done){
    request(server)
      .get('/campaign/1')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res){
        if (err) return done(err);
        done()
      });
  })
  
  it('respond to post /campaign', function(done){
    request(server)
      .post('/campaign')
      .set('Accept', 'application/json')
	  .send(campaign)
      .expect(200)
      .end(function(err, res){
        if (err) return done(err);
        done()
      });
  })
  
  it('respond to put /campaign', function(done){
    request(server)
      .put('/campaign')
      .set('Accept', 'application/json')
	  .send(campaign)
      .expect(200)
      .end(function(err, res){
        if (err) return done(err);
        done()
      });
  })
  
  it('respond to delete /campaign', function(done){
    request(server)
      .del('/campaign/1')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res){
        if (err) return done(err);
        done()
      });
  })
  
});