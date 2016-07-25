// adds the port to the env, so we can pull it from there
var port     = process.env.PORT || 3000;
// set up ======================================================================
// get all requires
var express  = require('express');
var passport = require('passport');
var flash    = require('connect-flash');
var multer  = require('multer');
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var logger = require('logger');
var path = require('path');
var ejs = require('ejs');
var jsreport = require('jsreport');

var config=require('./config/connections');

var campaign=require('./models/campaign');


//create app
var app      = express();

require('./controllers/auth')(passport); // pass passport for configuration

// set up our express application
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({extended: true,limit: '5mb'}));

app.set('view engine', 'ejs'); // set up ejs for templating
app.set('views', './views'); // set dir templates

// required for passport
app.use(session({ secret: '1h2kj3jh45j3h665l78784wweyuY',saveUninitialized: true,resave: true })); // session secret

app.use(passport.initialize());
app.use(passport.session(true)); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session


var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads');
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() + '-' + file.originalname  );
  }
});

var limits={
             filesize:1024*1024*2
            }
            
var upload = multer({ storage : storage, limits:limits}).any();


//******************************
//  routes for uploads files
//******************************
app.use('/images',express.static(path.resolve(__dirname, './uploads')));

//******************************
//  routes for uploads files
//******************************
app.post('/app/uploads', function (req, res, next) {
    upload(req, res, function (err) {
        console.log("uploads req.files:"+JSON.stringify(req.files));
        if (err) {
          // An error occurred when uploading 
          return res.end("Error uploading file.");
        
        }
    // Everything went fine 
    var a={ 
              files:
                [
                  {
                    url: "/images/"+req.files[0].filename
                  }
                ]
            }
    res.json(a);
  })
})

app.post('app/deleteUploads/:img', function(req, res) {
    console.log("deleteUploads req.files:"+JSON.stringify(req));
    res.status(200).send('Ok');
});


// Set route static contents
app.use('/app',express.static(path.resolve(__dirname, './client')));

// Set route static for css mobile pages
app.use('/q/lib',express.static(path.resolve(__dirname, './client/lib')));
app.use('/n/lib',express.static(path.resolve(__dirname, './client/lib')));
app.use('/s/lib',express.static(path.resolve(__dirname, './client/lib')));

app.get('/pdf', function(req, res) { 
    jsreport.render("<h1>Hello world</h1>").then(function(out) {
        out.stream.pipe(res);
      }).catch(function(e) {    
        res.end(e.message);
      });
});


//******************************
//  routes for qr codes download
//******************************
//qr codes
var qr = require('qr-image'); 
 
app.get('/qr-svg/:code', function(req, res) { 
  var code = qr.image(config.server+'/q/'+req.params.code, { type: 'svg' });
    res.type('svg');
  code.pipe(res);
});

app.get('/qr-png/:code', function(req, res) { 
  var code = qr.image(config.server+'/q/'+req.params.code, { type: 'png' });
  res.type('png');
  code.pipe(res);
});
 
app.get('/qr-png-dw/:code', function(req, res) { 
  var code = qr.image(req.params.code, { type: 'png' });
  res.setHeader('Content-disposition', 'attachment; filename=' + 'Código QR.png');
  res.setHeader('Content-type', 'image/png');
  res.type('png');
  code.pipe(res);
});

app.get('/qr-svg-custom/:id_code', function(req, res) { 
  //var code = qr.image(req.params.code, { type: 'png' });
    campaign.findById({id_campaign:req.params.id_code,id_user:req.user.id}, function(err, data) {
    if (err) res.send(err);
    res.setHeader('Content-disposition', 'attachment; filename=' + 'QR_campaña_'+data.name+'.svg');
    res.setHeader('Content-type', 'image/svg');
    res.type('svg');
    res.send(data.custom_qr_svg);
  });
  
});

app.get('/qr-png-custom/:id_code', function(req, res) { 
  //var code = qr.image(req.params.code, { type: 'png' });
    campaign.findById({id_campaign:req.params.id_code,id_user:req.user.id}, function(err, data) {
      if (err) {
          console.log("ERROR 1"+err);
          return;
      }
     
  
      var gm = require('gm');
  
      var buf = new Buffer(data.custom_qr);
      res.setHeader('Content-disposition', 'attachment; filename=' + 'QR_campaña_'+data.name+'.png');
      res.setHeader('Content-type', 'image/png');
      gm(buf, 'svg.svg').stream('png', function (err, stdout, stderr) {
        if (err) {
                console.log("ERROR 2"+stderr);
                return;
        }
        stdout.pipe(res);
      });
    });       
});

//==============================================================================
// routes
//==============================================================================

// authenticacion  -------------------------------------------------------------
require('./routes/auth.js')(app, passport); // load our routes and pass in our app and fully configured passport

// api -------------------------------------------------------------------------
var routesAccounts=require('./routes/accounts');
var routesUsers=require('./routes/users');
var routesConfig=require('./routes/config');
var routesCampains=require('./routes/campaigns');
var routesMobilepages=require('./routes/mobilepages');
var routesTriggerPages=require('./routes/triggerPages');

app.use('/api', routesAccounts);
app.use('/api', routesUsers);
app.use('/api', routesConfig);
app.use('/api', routesCampains);
app.use('/api', routesMobilepages);
app.use('', routesTriggerPages);



// launch ======================================================================
app.listen(port);
console.log('Listening in port ' + port);










