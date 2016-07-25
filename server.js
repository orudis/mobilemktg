//Heroku dynamically assigns your app a port, so you can't set the port to a fixed number. 
//Heroku adds the port to the env, so we can pull it from there
var port     = process.env.PORT || 80;
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
//app.use(logger); // log every request to the console
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


// land page for triger qr
app.get('/geoip', function(req, res) {
    var geoip = require('geoip-lite');
    var ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    console.log("ip:"+ip);
    var ip = "147.84.144.13";
     var geo = geoip.lookup(ip);
    //geo:{"range":[2471755776,2471806719],"country":"ES","region":"31","city":"Murcia","ll":[37.987,-1.13],"metro":0}
    
    var ht={texto:'<h1>localizacion:'+geo.city+'</h1>'};
    console.log('LOCALIZACION:'+JSON.stringify(geo));
    res.render('index',ht);
});

app.get('/browser', function(req, res) {
  var MobileDetect = require('mobile-detect')
  var  md = new MobileDetect(req.headers['user-agent']);
  
  var md = new MobileDetect(window.navigator.userAgent);
   
    console.log( md.mobile() );          // 'Sony' 
    console.log( md.phone() );           // 'Sony' 
    console.log( md.tablet() );          // null 
    console.log( md.userAgent() );       // 'Safari' 
    console.log( md.os() );              // 'AndroidOS' 
    console.log( md.is('iPhone') );      // false 
    console.log( md.is('bot') );         // false 
    console.log( md.version('Webkit') );         // 534.3 
    console.log( md.versionStr('Build') );       // '4.1.A.0.562' 
    console.log( md.match('playstation|xbox') );
    res.render('index');
});

var ht={html:'<h1>HOLA</H1>'};
// land page for triger qr
app.get('/template', function(req, res) {
    //var id_site = req.params.id_site;
    console.log("template");
    res.render('index_mobile',ht);
});



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
  
 // var code = qr.svgObject(config.server+'/q/'+req.params.code, { type: 'svg' });
 // res.setHeader('Content-Type', 'application/json');
 //   res.send(JSON.stringify(code));
  
  

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
   //code.pipe(res);

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
   
        
    //var  svg2png=require('svg2png');   
        
    //var outputBuffer = svg2png.sync(data.custom_qr,{width:'600',height:'600'}); 
    var gm = require('gm');
        
        /*gm(data.custom_qr,'img.svg').toBuffer('PNG',function (err, buffer) {
          if (err) {
              console.log("ERROR 2"+err);
              return;
          }
          console.log('done!');
          res.setHeader('Content-disposition', 'attachment; filename=' + 'QR_campaña_'+data.name+'.png');
          res.setHeader('Content-type', 'image/png');
          res.type('png');
          res.send(buffer); 
        })*/
        console.log("custom_qr:"+data.custom_qr);
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










