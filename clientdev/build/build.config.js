'use strict';

module.exports = {
	/*
	 * bower files to load, they are not watched during the development, the order matters.
	 */
	bowerCfg:{
		directory:'./bower_components',
		name: 'mobiletrck',
		version: '0.0.1',
		authors: [
			'educa <carm.es>'
		],
		license: 'MIT',
		ignore: [
			'**/.*',
			'node_modules',
			'bower_components'
		],
		dependencies: {
			'jquery': 'educarm/jquery#v2.1.1',
			'jquery-ui': 'educarm/jquery-ui#v1.10.4',
			'lodash': 'educarm/lodash#v3.0.0-pre',
			'bootstrap': 'educarm/bootstrap#v3.2.0',
			'angular': 'educarm/angular#v1.2.17',
			'angular-route': 'educarm/angular-route#v1.2.22',
			'angular-resource': 'educarm/angular-resource#v1.2.22',
			'angular-sanitize': 'educarm/angular-sanitize#v1.2.22',
			'angular-scenario': 'educarm/angular-scenario#v1.2.22',
			'angular-touch': 'educarm/angular-touch#v1.2.22',
			'angular-animate': 'educarm/angular-animate#v1.2.22',
			'angular-cookies': 'educarm/angular-cookies#v1.2.22',
			'angular-ui-bootstrap3': 'educarm/angular-ui-bootstrap3#v0.11.0',
			'edu-crud': 'educarm/edu-crud#v0.0.1',
			'Font-Awesome': 'educarm/Font-Awesome#v4.2.0',
			'textAngular': 'educarm/textAngular#v1.2.2',
			'es5-shim': 'educarm/es5-shim#v4.0.1',
			'angular-file-upload': 'educarm/angular-file-upload#v1.0.2',
			'd3': 'educarm/d3#v3.4.11',
			'nvd3': 'educarm/nvd3#v1.1.15-beta',
			'angular-nvd3': 'educarm/angular-nvd3#v0.0.9',
			'moment':'',
			'fullcalendar':'educarm/fullcalendar#v2.1.0',
			'angular-ui-calendar':'educarm/angular-ui-calendar#v0.8.1',
			'angular-xeditable':'',
			'angular-mocks': 'educarm/angular-mocks#v1.2.22',
			'mkoryak-floatThead':'educarm/mkoryak-floatThead#v1.2.9',
			'angular-filter':'educarm/angular-filter#v0.4.6',
			'jquery.sparkline':'',
			'angular-bootstrap-colorpicker':'',
            'angular-minicolors':'',
			//'jquery.easing':'~1.3.1',
			//'bootstrap-switch':'~3.0.2',
			//'angular-bootstrap-switch':'',
			//'angular-bootstrap-slider':'0.0.5',
			//'bootstrap-progressbar':'~0.8.3',
			//'knobjs':'~0.0.2',
			//'angular-knob':'~0.0.2',
			//'jquery.easy-pie-chart':'~2.1.4',
			//'switchery': '~0.6.2',
			//'nanoscroller': '~0.8.4',
			//'jquery-flot': '~0.8.3',
			//'flotcharts': '~0.8.1',
			'angularjs-toaster': '~0.4.8',
            'interact':'1.2.*',
            'fabric':'',

            'blueimp-file-upload': '~9.12.1',
            'jquery-sortable': '~0.9.12',
            'handlebars': '~4.0.0',
            'medium-editor': '^5.15.0',
            'medium-editor-insert-plugin':'',
            'medium-editor-tables':'',
            'angular-medium-editor':'',
            'topojson':'',
            'ng-file-upload':''//,
            //'d3.geo.zoom':''
                        
                       
			
			
			
		}, 
		devDependencies: {
			'angular-mocks': 'educarm/angular-mocks#v1.2.22'
		},
		resolutions: {
		        'jquery': 'v2.1.1',
			'angular': 'v1.2.17',
			'fullcalendar':'v2.1.0',
			'bootstrap': 'v3.2.0',
			'd3': 'v3.4.11',
                        'angular-ui-bootstrap3':'v0.11.0'
			
		}
	},
	
	/*
	 * Build config. Do not touch
	 buildClientDevDir
	 buildClientDistDir
	 */
    buildDir: './client',
    distDir: './client',
    buildWebAppDir:'.',
    clientDevDir: 'clientdev',
    serverDevDir: './server',
         
    libDirJs: ['lib/js/*.js'],
    libDirCss: ['lib/css/*.css'],
    libDirFonts: ['lib/fonts/*.*'],
    libDirFonts2: ['fonts/*.*'],
	   
    buildFiles: ['build/**/*.js', '!build/*.config.js'],
	
    buildConf: ['build/*.config.js'],
    /*
     * banner to prepend on the generated files
     */
    banner: '/* <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd")  %> */\n',
    
    /*
     * paths of your app files, they will be automagically loaded and watched by the build.
     */
    webappFiles: { 
        js: ['src/app/*.js','src/app/**/*.js','src/app/layout/**/*.js', 'src/common/**/*.js'],
        assets: ['assets/**'],
        tests: ['test/**/*.spec.js'],
        templatesApp: ['<%=config.clientDevDir%>/src/app/**/*.tpl.html'],
        templatesCommon: ['<%=config.clientDevDir%>/src/common/**/*.tpl.html'],
        cssFiles: ['webappdev/src/assets/css/*.css','webappdev/src/assets/css/**/*.css'],
        html: 'index.tpl.html'
    },
	nodeServerFiles: { 
        all: ['<%=config.serverDevDir%>/package.json','<%=config.serverDevDir%>/common/**/*','<%=config.serverDevDir%>/server/**/*']
    }
    
};
