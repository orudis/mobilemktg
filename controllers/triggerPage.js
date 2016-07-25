// Load required packages
var mobilePageModel = require('../models/mobilepage');
var campaignModel = require('../models/campaign');
var visitModel = require('../models/visit');
var helpers = require('../helpers/base64');
var geoip = require('geoip-lite');
var mobileDetect = require('mobile-detect')
var moment=require('moment');
  

// Create endpoint /q/:code for GET
exports.getTriggerPagesQr = function(req, res) {
   // Use the Campain model to find campain by id
  campaignModel.findOne({id:req.params.code}, function(err, campaign) {
        if (err)
          res.send(err);
        // find campaign by id
          mobilePageModel.findById({id:campaign.id_page}, function(err, mobilePage) {
            if (err)
              res.send(err);
              //location data
              var ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
              var ip = "147.84.144.13";
              var geo = geoip.lookup(ip);
              //geo:{"range":[2471755776,2471806719],"country":"ES","region":"31","city":"Murcia","ll":[37.987,-1.13],"metro":0}
              
              //browser data
              var  md = new mobileDetect(req.headers['user-agent']);
    
              var visit={};
              visit.trigger='qr';
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
              
              visit.id_page=mobilePage.id;
              
              // save visit data
              visitModel.save(visit,function(err,data) {
                if (err)
                  console.log("error saving visit"+err);
              });
 
              res.render('index_mobile',{'html':mobilePage.html});
          });
  }); 
    
};

// Create endpoint /n/:code for GET
exports.getTriggerPagesNfc = function(req, res) {
  // Use the Campain model to find campain by id
  campaignModel.findOne({id:req.params.code}, function(err, row) {
        if (err)
          res.send(err);

        //res.json(rows);
        // Use the Campain model to find all campain
          mobilePageModel.findById({id:row.id_page}, function(err, row) {
            if (err)
              res.send(err);

            res.render('index_mobile',{'html':row.html});
          });
  }); 
};

// Create endpoint /s/:code for GET
exports.getTriggerPagesShort = function(req, res) {
  // Use the Campain model to find campain by id
  campaignModel.findOne({id:req.params.code}, function(err, row) {
        if (err)
          res.send(err);

        //res.json(rows);
        // Use the Campain model to find all campain
          mobilePageModel.findById({id:row.id_page}, function(err, row) {
            if (err)
              res.send(err);

            res.render('index_mobile',{'html':row.html});
          });
  }); 
};



