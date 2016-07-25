var phantom = require('phantom');
var Handlebars = require('Handlebars');
//var app = require('./server');
//var dataSource = app.dataSources.mongoDB;
//console.log("dataSource....................:"+dataSource);
//var Modelo2 = app.models.modelo2;
var loopback = require('loopback');
var boot = require('loopback-boot');
var app = module.exports = loopback();
boot(app, __dirname);


var dataSource = app.dataSources.mongoDB;
//console.log("dataSource....................:"+dataSource);
var Modelo2 = app.models.modelo2;
/*Modelo2.find({}, function(err, modelo2) {
        console.log('Rows modelo2:', JSON.stringify(modelo2));
});
*/
//Modelo2.forEach(function(act) {

//});
  //----------------------------------------------------------------------------------
	/*var source2 = "<html><head></head><body><p>Hello, my name is {{name}}. I am from {{hometown}}. I have " +
             "{{kids.length}} kids:</p>" +
             "<ul>{{#kids}}<li>{{name}} is {{age}}</li>{{/kids}}</ul>"+
			 "</body></html>";
	var template2 = Handlebars.compile(source);
	*/
	var source = "<html><head></head><body>" +
             "<table  border='1'>"+
				"{{#data}}" +
				"<tr>"+
				"<td>{{id}}</td><td>{{nombre}}</td><td>{{cantidad}}</td> "+
				"</tr>"+
				"{{/data}}"+
				
			 "</table>" +
			 "</body></html>";
	var template = Handlebars.compile(source);
	var result="";
	Modelo2.find({}, function(err, data) {
        //console.log('Customers matched by emails.email', modelo2);
		 result = template({"data":data});
    });
	
	
	
	
	
	/*

	var data = { "name": "Alan", "hometown": "Somewhere, TX",
				 "kids": [{"name": "Jimmy", "age": "12"}, {"name": "Sally", "age": "4"}]};
	var result = template(data);
*/
	phantom.create(function ( ph) {
	  ph.createPage(function (page) {
		//page.set("paperSize", { format: "A4", orientation: 'portrait', margin: '1cm' });
	 
		page.set("paperSize",  {
		  format: "A4",
		  orientation: "portrait",
		  margin: {left:"2.5cm", right:"2.5cm", top:"1cm", bottom:"1cm"}
		});
		
		
	/*	page.paperSize = {
  format: 'A4', orientation: 'portrait', margin: '0px',
  header: {
    height: "1.2cm",
    contents: page.onCallback(function(pageNum, numPages) {
      return '<img src="https://www.google.com.bo/images/srpr/logo4w.png" height="0.95cm"/>';
    }
  },
  footer: {
    height: "0.7cm",
    contents:page.onCallback(function(pageNum, numPages) {
      return '<h3 class="header">Footer</h>';
    })
  }
}*/
		
		
		
		
		
		//page.viewportSize = { width: 400, height : 400 };	
		page.open("about:blank", function(status) {
		  /*page.evaluate(function(result) {   
            console.log("template result2:"+result);		  
			//document.write('<html><body><script>document.write("<h1>Hello From JS</h1>");</script><p>Hello from html</p></body></html>');
			//document.write(result);
		  });*/
		 // console.log("result:"+result);
		  //page.setContent('<html><body><h1>Hello from html</h1></body></html>');
		  page.setContent(result);
		  return page.render('./phatntomjs.pdf', function (err) {
		    console.log("FINNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN"+err);
			ph.exit();
		  });
		});
	  });         
	}, 
	{  //esto para que funcione en window sin compilar weak (por si no tienes instalado  Microsoft VS2010 or VS2012
	  dnodeOpts: {
		weak: false
	  }
	  }
);
  