
var appConfig={
		app:"mobilemktg",
		appName:"Mobilemarketing",
		appDesc:"mobilemarketing",
		version:"0.0.1",
		consejeria:"",
		copyright:"MIT",
        host:"https://mobilemktg.herokuapp.com",
	    urlBaseApiRest:"http://147.84.65.218/api",
	    urlBaseAut:"services/controlservice/autorizacion",
	    urlBaseMenu:"services/controlservice/menu",
		userDebug:true,
		menuDebug:true,
		showHeader:false,
		showTopnav:true,
		showLeftnav:false,
		showBreadcrums:true,
		showFooter:true,
		
	    modules:[
	             // templates                    
	         	'templates.app',
	         	'templates.common',
				
	         	// layout 
	         	//'app.layout.shell',
	         	
	         	// Angular modules 
	         	'ui.bootstrap',
	         	'ngRoute',
	         	'ngAnimate',
	         	'ngSanitize',
	         	// 3rd Party Modules 
				'xeditable',
				'angular.filter',
				'toaster',
                'minicolors',
				//'easypiechart',
				//'ui.knob',
				//'ui.bootstrap-slider',
				// common modules
				'common.directives.appVersion',
				'common.directives.resize'
				/*******************************/
				/*    MOCKS                    */
				//'e2e-mocks'
	         ],     
        procesos_uri:{
                 
        },
		user:{}	,
        roles:[]
				
	   
	   
		
		
}