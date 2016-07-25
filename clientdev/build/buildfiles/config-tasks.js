'use strict';
var path = require('path');
module.exports = function(grunt) {
	return {
		// The actual grunt server settings
		connect: {
		  options: {
			port: 80,
			// Change this to '0.0.0.0' to access the server from outside.
			hostname: '0.0.0.0',
			livereload: 35729,
			keepalive:false
		  },
		  test: {
			options: {
			  port: 9001,
			  middleware: function (connect) {
				return [
				  connect.static('.tmp'),
				  connect.static('test'),
				  connect().use(
					'/bower_components',
					connect.static('./bower_components')
				  ),
				  connect().use(
					'/lbclient',
					connect.static('./lbclient')
				  ),
				  connect.static(appConfig.app)
				];
			  }
			}
		  }
		},
		
		open: {
			  server: {
				url: 'http://localhost:<%= connect.options.port %>/index.html'
			  }
		},
	
		/*componentConfig: {
			hostname: 'localhost', // change to 0.0.0.0 to listen on all connections
			base: 'src/main/webapp',
			port: 4000,
			livereloadport: 35701
		},
		connect: {
			dev: {
				options: {
					hostname: '<%= componentConfig.hostname %>',
					port: '<%= componentConfig.port %>',
					base: '<%= componentConfig.base %>',
					livereload: '<%= componentConfig.livereloadport %>'
				}
			}
		}
		
		
		,
		express: {
			options: {
			  // Override defaults here
			  background: false
			},
			dev: {
			  options: {
				script: 'webapp/server/server.js'
			  }
			},
			prod: {
			  options: {
				script: 'dist/webapp/server/server.js',
				node_env: 'production'
			  }
			},
			test: {
			  options: {
				script: 'webapp/server/server.js'
			  }
			}
		},*/
		
		rename: {
			  main: {
			    files: [
			          {src: '<%= config.clientDevDir %>/lib/js/ui-bootstrap.js', dest: '<%= config.clientDevDir %>/lib/js/ui-1bootstrap.js'},
			        ]
			  }
		},
		bower_concat: { 
			  all: {
			    dest: '<%= config.distDir %>/assets/js/<%= pkg.version %>.lib.js',
			    exclude: [
			        'Font-Awesome'
			    ],
			    dependencies: {
			    	'angular': ['jquery', 'bootstrap']
			    },
			    mainFile:{
			    	'angular-ui-bootstrap3-patched': ['ui-bootstrap.js','ui-bootstrap-tpls.js'],
					'angular-scrollable-table': ['angular-scrollable-table.js','scrollable-table.css']
					
			    },
			    bowerOptions: {
			      relative: false
			    }
			  }
		},
		bowerjson:{
			default:{
			bowercfg: '<%= config.bowerCfg %>',
		}
		},
		bower: {
			install: {
					options: {
						targetDir: '<%= config.clientDevDir %>/lib',
						layout: 'byType',
						install: true,
						copy:false,
						verbose: false,
						cleanTargetDir: false,
						cleanBowerDir: false,
						bowerOptions: {}
						}
				//just run 'grunt bower:install' and you'll see files from your Bower packages in lib directory
			}
		},
		'bower-linker': {
			default: {
				options: {
					copy:true,
					root: '<%= config.clientDevDir %>/lib',     // The root directory to place linked sources.
					map: {
						'*.js': '/js',    // Sub directories to link specific source types.
						'*.css': '/css',
						'*': '/fonts'
					}
				}
			}
		},
		jshint: {
            options: {
				jshintrc: '.jshintrc',
				reporter: require('jshint-stylish')
			},
            
			src: '<%= config.webappFiles.js %>',
			//tests: '<%= config.webappFiles.tests %>',
			gruntfile: 'Gruntfile.js',
			buildFiles: '<%= config.buildFiles %>',
			nodeServer:'<%= config.nodeServerFiles %>'
			
		},
		sass: {
			dev: {
				src: '<%= config.webappFiles.sass %>',
				dest: '<%= config.buildDir %>/assets/css/<%= pkg.version %>.style.css'
			}
		},
		less: {
			dev: {
			options: {
				paths: ["'<%= config.buildDir %>/assets/css%>'"]
			},
			files: {
				'<%= config.buildDir %>/assets/css/<%= pkg.version %>.style.css': '<%= config.webappFiles.sass %>'
			}
			}
		},
		watch: {
			options: {
				spawn: false
			},
			buildServer: {
				files:['<%= config.serverDevDir %>/**/*'],
				tasks: [ 'jshint:nodeServer'],
				options: {
					event: ['added', 'changed'],
					livereload: false
				}
			},
			buildServerDeleted: {
				files:['<%= config.serverDevDir %>/**/*'],
				tasks: ['builddev'],
				options: {
					event: ['deleted'],
					livereload:false
				}
			},
			buildFiles: {
				files: '<%= config.buildFiles %>',
				tasks: ['newer:jshint:buildFiles'],
				options: {
				  livereload: false
				}
			},
			buildConf: {
				files: '<%= config.buildConf %>',
				tasks: ['builddev'],
				options: {
				  livereload: false
				}
			},
			gruntfile: {
				files: 'Gruntfile.js',
				tasks: ['newer:jshint:gruntfile'],
				options: {
				  livereload: false
				}
			},
			jssrc: {
				files:['<%= config.clientDevDir %>/src/app/*.js','<%= config.clientDevDir %>/src/app/**/*.js','<%= config.clientDevDir %>/src/app/layout/**/*.js', '<%= config.clientDevDir %>/src/common/**/*.js'],
				tasks: [ 'copy:webappJs', 'tpl:build'],
				options: {
					event: ['added', 'changed'],
					livereload:false,
				}
			},
			jssrcDeleted: {
				files:['<%= config.clientDevDir %>/src/app/*.js','<%= config.clientDevDir %>/src/app/**/*.js','<%= config.clientDevDir %>/src/app/layout/**/*.js', '<%= config.clientDevDir %>/src/common/**/*.js'],
				tasks: ['builddev'],
				options: {
					event: ['deleted'],
					livereload:false
				}
			},
			assets: {
				files: '<%= config.clientDevDir %>/src/assets/**',
				tasks: ['newer:copy:webappAssets'],
				options: {
				  livereload: false
				}
			},
			assetsDeleted: {
				files:['<%= config.clientDevDir %>/src/assets/**'],
				tasks: ['builddev'],
				options: {
					event: ['deleted'],
					livereload:false
				}
			},
			html: {
				files: ['<%= config.clientDevDir %>/<%= config.webappFiles.html %>'],
				tasks: ['tpl:build'],
				options: {
					//event: ['added', 'changed'],
					livereload: false
				}
			},
			htmlDeleted: {
				files:['<%= config.clientDevDir %>/<%= config.webappFiles.html %>'],
				tasks: ['builddev'],
				options: {
					event: ['deleted'],
					livereload:false
				}
			},
			templates: {
				files: [
					'<%= config.webappFiles.templatesApp %>',
					'<%= config.webappFiles.templatesCommon %>'
				],
				tasks: ['html2js'],
				options: {
				  livereload: false
				}
			},
			templatesDeleted: {
				files:[
					'<%= config.webappFiles.templatesApp %>',
					'<%= config.webappFiles.templatesCommon %>'],
				tasks: ['builddev'],
				options: {
					event: ['deleted'],
					livereload:false
				}
			},
			css: {
				files: '<%= config.webappFiles.cssFiles %>',
				tasks: ['concat:css'],
				options: {
				  livereload: false
				}
			},
			cssDeleted: {
				files: '<%= config.webappFiles.cssFiles %>',
				tasks: ['builddev'],
				options: {
					event:['deleted'],
					livereload: false
				}
			}
			//,
			//livereload: {
			//	options: {
			//	  livereload: '<%= connect.options.livereload %>'
			//	},
			//	files: [
			//		'<%= config.buildWebAppDir %>/**/*'
			//	]
			// }
			//,
			//livereload: {
			//	files: ['<%= componentConfig.base %>/**/*.{js,html,css}'],
			//	options: {
			//		livereload: '<%= componentConfig.livereloadport %>',
			//		open: {
			//				target: 'http://localhost:4000/index.html'
			//		}
			//	}
			//}
		},
		clean: {
		    libdev:['<%= config.clientDevDir %>/lib/js/**','<%= config.clientDevDir %>/lib/css/**','<%= config.clientDevDir %>/lib/fonts/**'],
			builddist:['<%= config.buildDir %>/src','<%= config.buildDir %>/lib','<%= config.buildDir %>/templates-app.js','<%= config.buildDir %>/templates-common.js','<%= config.buildDir %>/assets/**','<%= config.buildDir %>/index.html'],
			//builddev:[ '<%= config.buildWebAppDir %>/**'],
			//build: ['<%= config.buildDir %>/index.html','<%= config.buildDir %>/assets/js','<%= config.buildDir %>/assets/img','<%= config.buildDir %>/assets/fonts','<%= config.buildDir %>/assets/css','<%= config.buildDir %>/src','<%= config.buildDir %>/lib','<%= config.buildDir %>/templates-app.js','<%= config.buildDir %>/templates-common.js'],
			builddev: ['<%= config.buildDir %>/src','<%= config.buildDir %>/lib','<%= config.buildDir %>/templates-app.js','<%= config.buildDir %>/templates-common.js'],
			//buildServerDist:[ '<%= config.buildWebAppDir %>/common/**','<%= config.buildWebAppDir %>/node_modules/**','<%= config.buildWebAppDir %>/server/**','<%= config.buildWebAppDir %>/package.json']
			
		},
		rev: {
			options: {
				encoding: 'utf8',
				algorithm: 'md5',
				length: 8
			},
			dist: {
				files: {
					src: [
						'<%= config.distDir %>/assets/js/{,*/}*.js',
						'<%= config.distDir %>/assets/css/{,*/}*.css'
					]
				}
			}
		},
		imagemin: {
			dist: {
				files: [{
					expand: true,
					cwd: '<%= config.buildDir %>/assets/img',
					src: '{,*/}*.{gif,jpeg,jpg,png}',
					dest: '<%= config.distDir %>/assets/img'
				}]
			}
		},
		svgmin: {
			dist: {
				files: [{
					expand: true,
					cwd: '<%= config.buildDir %>/assets/img',
					src: '{,*/}*.svg',
					dest: '<%= config.distDir %>/assets/img'
				}]
			}
		},
		html2js: {
			options:{
				//base: '<%= config.clientDevDir %>/<%= config.clientDevDir %>/src'
				base: '<%= config.clientDevDir %>/src'
			},
			app: {
				options: {
					module: "templates.app"
				},
				src: '<%= config.webappFiles.templatesApp %>',
				dest: '<%= config.buildDir %>/templates-app.js'
			},
			common: {
				options: {
					module: "templates.common"
				},
				src: '<%= config.webappFiles.templatesCommon %>',
				dest: '<%= config.buildDir %>/templates-common.js'
			}
		},
		tpl: {
			build: {
				tpl:'index.tpl.html',
				target:'index.html',
				devdir: '<%= config.clientDevDir %>',
				builddir:'<%= config.buildDir %>',
				src: [
					//'<%=bower.install.options.targetDir%>/**/*.js',
					//'<%= config.buildDir %>/src/**/*.js',
					//'<%= html2js.common.dest %>',
					//'<%= html2js.app.dest %>',
					//'<%=bower.install.options.targetDir%>/**/*.css',
					//'<%= sass.dev.dest %>'
					'<%= config.buildDir %>/lib/js/*.js',
					'<%= config.buildDir %>/lib/css/*.css',
					'<%= config.buildDir %>/assets/css/*.css',
					'<%= config.buildDir %>/src/**/*.js',
					'<%= config.buildDir %>/*.js'
					
				]
			},
			dist: {
				tpl:'index.tpl.html',
				target:'/index.html',
				devdir: '<%= config.clientDevDir %>',
				builddir:'<%= config.distDir %>',
				src: [
					'<%= config.distDir %>/assets/css/*.css',
					'<%= config.distDir %>/assets/js/*lib.js',
					'<%= config.distDir %>/assets/js/*app.js'
				]
			}
		},
		copy: {
			webappJs: {
				files: [{
					src: ['<%= config.webappFiles.js %>'],
					dest: '<%= config.buildDir %>/',
					cwd: '<%= config.clientDevDir %>',
					expand: true
				}]
			},
			webappAssets: {
				files: [{
					src: ['<%= config.webappFiles.assets %>'],
					dest: '<%= config.buildDir %>',
					cwd: '<%= config.clientDevDir %>/src',
					expand: true
				}]
			},
			libCss: {
				files: [{
					src: ['<%= config.libDirCss %>'],
					dest: '<%= config.buildDir %>',
					cwd: '<%= config.clientDevDir %>',
					expand: true
				}]
			},
			libFonts: {
				files: [{
					src: ['<%= config.libDirFonts %>'],
					dest: '<%= config.buildDir %>',
					cwd: '<%= config.clientDevDir %>',
					expand: true
				}]
			},
			
			libFonts2: {
				files: [{
					src: ['<%= config.libDirFonts2 %>'],
					dest: '<%= config.buildDir %>/assets',
					cwd: '<%= config.clientDevDir %>/lib',
					expand: true
				}]
			},
			libJs: {
				files: [{
					src: ['<%= config.libDirJs %>'],
					dest: '<%= config.buildDir %>',
					cwd: '<%= config.clientDevDir %>',
					expand: true
				}]
			},
			distAssets: {
				files: [{
					src: ['**'],
					dest: '<%= config.distDir %>/assets',
					cwd: '<%=config.buildDir %>/assets',
					expand: true
				}]
			}
			/*,
			nodeServer: {
				files: [{
					src: ['**'],
					dest: '<%= config.buildWebAppDir %>',
					cwd: '<%=config.serverDevDir %>',
					expand: true
				}]
			}*/
		},
		ngmin: {
			dist: {
				files: [{
					src: ['<%= config.webappFiles.js %>'],
					cwd: '<%= config.buildDir %>',
					dest: '<%= config.buildDir %>',
					expand: true
				}]
			}
		},
		htmlmin: {
			dist: {
				options: {
					collapseWhitespace: true
				},
				files: {
					'<%= config.buildDir %>/index.html': '<%= config.buildDir %>/index.html'
				}
			}
		},
		concurrent: {
			options: {
              limit  : 5
            },
			build: [
				'copy:webappJs',
				'copy:libJs',
				'copy:libCss',
				'copy:libFonts',
				'copy:libFonts2'
			]
		},
		uglify: {
			options: {
				banner: '<%= config.banner %>',
				mangle: false
			},
			app: {
				src: '<%= config.distDir %>/assets/js/<%= pkg.version %>.app.js',
				dest: '<%= config.distDir %>/assets/js/<%= pkg.version %>.app.js'
			},
			vendor: {
				src: '<%= config.distDir %>/assets/js/<%= pkg.version %>.lib.js',
				dest: '<%= config.distDir %>/assets/js/<%= pkg.version %>.lib.js'
			}
		},
		cssmin: {
			dist: {
				options: {
					banner: '<%= config.banner %>',
					keepSpecialComments: 0
				},
				src: '<%= config.distDir %>/assets/css/<%= pkg.version %>.style.css',
				dest: '<%= config.distDir %>/assets/css/<%= pkg.version %>.style.css'
			}
		},
		concat: {
			css:{
				src: '<%= config.webappFiles.cssFiles %>',
				dest: '<%= config.buildDir %>/assets/css/<%= pkg.version %>.style.css'
			},
			webappJs: {
				options: {
					banner: '<%= config.banner %>'
				},
				src: [
					'build/buildfiles/module.prefix',
					'<%= config.buildDir %>/src/**/*.js',
					'<%= html2js.app.dest %>',
					'<%= html2js.common.dest %>',
					'build/buildfiles/module.suffix'
				],
				dest: '<%= config.distDir %>/assets/js/<%= pkg.version %>.app.js'
			},
		 /*
		  * ESTA TAREA LA REALIZA AHORA BOWER-CONCAT. Concat:libJs no concatena los archivos en orden de dependencias
		  * */
		  /*libJs: { //
				src: '<%= config.clientDevDir %>/<%= config.libDirJs %>',
				//src: '<%= config.bowerCfg.orderDependencies %>',
				dest: '<%= config.distDir %>/assets/js/<%= pkg.version %>.lib.js'
			},*/
			libCss: {
				src: [
					'<%= config.libDirCss %>',
					'<%= config.distDir %>/assets/css/<%= pkg.version %>.style.css'
				],
				dest: '<%= config.distDir %>/assets/css/<%= pkg.version %>.style.css'
			}
		}
	};
};
