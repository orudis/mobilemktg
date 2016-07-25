'use strict';
//var forever=require('forever-monitor');
var _ = require('lodash');
var config = require('./clientdev/build/build.config');
var configTasks = require('./clientdev/build/buildfiles/config-tasks');


module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);
	require('time-grunt')(grunt);
	
	grunt.loadTasks('clientdev/build/buildfiles/tasks');
	grunt.initConfig(_.extend({
		config: config,
		pkg: grunt.file.readJSON('package.json')
	}, configTasks(grunt)));

	grunt.registerTask('builddev', [
		'clean',
		'bowerjson',
		'bower:install',
		'bower-linker',
		'rename',
		'html2js',
		'concurrent:build',
		'jshint',
		'copy:webappAssets',
		'concat:css',
		'tpl:build'
		//'copy:nodeServer'
	]);

	grunt.registerTask('builddist', [
		'builddev',
		'ngmin',
		'concat',
		'bower_concat:all',
		'cssmin',
		'uglify',
		'rev',
		'imagemin',
		'svgmin',
		'tpl:dist',
		'htmlmin',
		'clean:builddev'
	]);
	
	
	grunt.registerTask('clientdev', [
		'builddev',
		//'express:livereload',
		//'run:development',
		//'open',
		'watch'
	]);
	grunt.registerTask('serverdev', [
		//'builddev',
		//'express:livereload',
		'run:development' //,
		//'open',
		//'watch'
	]);
	grunt.registerTask('dist', [
		'builddist'
	]);
	
	grunt.registerTask('devi', [
		'builddev',
		'connect:dev',
		'watch'
	]);
	
	grunt.registerTask('default', 'builddist');
	
	 grunt.registerTask('run', 'Start the app server', function() {
		var done = this.async();

		var connectConfig = grunt.config.get().connect.options;
		process.env.LIVE_RELOAD = connectConfig.livereload;
		process.env.NODE_ENV = this.args[0];

		var keepAlive = this.flags.keepalive || connectConfig.keepalive;
        //forever.startDaemon ('./webapp/server/server.js', {});
		var server = require('./webapp/server/server.js');
		console.log("server port:"+ connectConfig.port);
		server.set('port', connectConfig.port);
		server.set('host', connectConfig.hostname);
		server.start()
		  .on('listening', function() {
			//if (!keepAlive){ done();}
		  })
		  .on('error', function(err) {
			if (err.code === 'EADDRINUSE') {
			  grunt.fatal('Port ' + connectConfig.port +
				' is already in use by another process.');
			} else {
			  grunt.fatal(err);
			}
		  });
	  });
	
	 
	
};
