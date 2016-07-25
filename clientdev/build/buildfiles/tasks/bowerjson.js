
module.exports = function(grunt) {
  'use strict';
  
  grunt.registerMultiTask('bowerjson', 'Make files bower.json and .bowerrc', function() {
			var data=this.data.bowercfg;
			var bowerjson = {};
			var bowerrc={};
			
			//bowerrc['directory']=data.directory;
			bowerrc.directory=data.directory;
			['name','version','license','ignore','dependencies','resolutions'].forEach(function(prop) {
				if (prop in data) { bowerjson[prop] = data[prop]; }
			});

			grunt.file.write( 'bower.json', JSON.stringify(bowerjson, null, 2) );
			
			grunt.file.write( '.bowerrc', JSON.stringify(bowerrc, null, 2) );
			
	});

};