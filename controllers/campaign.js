// Load required packages
var Campaign = require('../models/campaign');

// Create endpoint /api/campaigns for GET all
exports.getCampaigns= function(req, res) {
  // Use the Campain model to find all campaign
  Campaign.find({id_user:req.user.id }, function(err, data) {
    if (err)
      res.send(err);

    res.json(data);
  });
};

// Create endpoint /api/campains/:campain_id for GET
exports.getCampaign = function(req, res) {
  // Use the Campain model to find a specific campaign
  Campaign.findById({id_campaign:req.params.id,id_user:req.user.id}, function(err, data) {
    if (err)
      res.send(err);

    res.json(data);
  });
};

// Create endpoint /api/campaigns for POST
exports.postCampaign = function(req, res) {
  // Set the Campain properties that came from the POST data
  var campaign = {};
  
  campaign.id = req.body.id;
  campaign.id_user = req.user.id;
  
  if(req.body.name!=null) campaign.name = req.body.name;
  if(req.body.description!=null) campaign.description = req.body.description;
  if(req.body.html!=null) campaign.html = req.body.html;
  if(req.body.id_page!=null) campaign.id_page = req.body.id_page;
  
  
  // Save the campain and check for errors
  Campaign.save(campaign,function(err,data) {
    if (err)
      res.send(err);

    res.json({ success:true, data: data });
  });
};

// Create endpoint /api/campaigns for PUT
exports.putCampaign = function(req, res) {
  // Set the Campain properties that came from the PUT data
  var campaign = {};
  campaign.name = req.body.name;
  campaign.img_bg = req.body.img_bg;
  campaign.img_logo = req.body.img_logo;
  campaign.img_qr = req.body.img_qr;
    
  campaign.custom_qr_svg = req.body.custom_qr_svg;
    
  campaign.custom_qr_json = req.body.custom_qr_json;
    
  campaign.description = req.body.description;
  campaign.id = req.body.id;
  campaign.id_page = req.body.id_page;
  campaign.id_user = req.user.id;
  Campaign.update(campaign, function(err, data) {
    if (err)
      res.send(err);

    res.json({ success:true, data: campaign });
  });
};

// Create endpoint /api/campaigns/:id for DELETE
exports.deleteCampaign = function(req, res) {
  
  Campaign.remove({ id: req.params.id,id_user:req.user.id }, function(err) {
    if (err)
      res.send(err);

    res.json({ success:true,data:{id_campaign:req.params.id} });
  });
};