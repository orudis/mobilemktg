'use strict';

function findJs(files) {

	return files.filter(function(file) {
		console.log("tpl: "+file);
		return file.match(/\.js$/);
	});
}

function findCss(files) {
	return files.filter(function(file) {
		return file.match(/\.css$/);
	});
}

function findOrderFiles(files,dependencies,filetype) {
	var pattern = "\\."+filetype+"$"; // <-- spot the extra '\'
	var re = new RegExp(pattern);
	var filessel=files.filter(function(file) {
		return re.exec(file);
	});
	var filesres=[];
	
	for (var val in dependencies)
	{
		for(var i=0;i<filessel.length;i++) {
			//console.log("file.name:"+filessel[i]+ " - " +val.replace('"',''))
			
			var filename=filessel[i].substring(filessel[i].lastIndexOf("/")+1,filessel[i].lastIndexOf(".")) ;
			if (filename===val.replace('"','')){
				filesres.push(filessel[i]);
				filessel.splice(i,1);
				break;
			}
		}
	}
	
	//add  rest of element		
	for(var j=0;j<filessel.length;j++) {
		filesres.push(filessel[j]);
	}
	for(var k=0;k<filesres.length;k++) {
		//console.log("file: "+filesres[k]);
	}
    
	return filesres;
}


module.exports = function(grunt) {
	grunt.registerMultiTask('tpl', 'Process index.tpl.html template', function() {
		var dirRE = new RegExp('^(' + grunt.config('config.devDir') + '|' + grunt.config('config.buildDir') + ')\/', 'g'),
		
		jsFiles=findOrderFiles(this.filesSrc,grunt.config('config.bowerCfg.dependencies'),"js").map(function(file) {
		    //console.log("TPL js....:"+file);
			return file.replace(dirRE, '');
		}),
		
		cssFiles=findOrderFiles(this.filesSrc,grunt.config('config.bowerCfg.dependencies'),"css").map(function(file) {
			//console.log("TPL css....:"+file);
			return file.replace(dirRE, '');
		});
		
		grunt.file.copy(this.data.devdir + '/'+this.data.tpl, this.data.builddir + '/'+ this.data.target, {
			process: function(contents) {
				return grunt.template.process(contents, {
					data: {
						js: jsFiles,
						css: cssFiles,
						version: grunt.config('pkg.version'),
						name: grunt.config('pkg.name')
					}
				});
			}
		});
	});
};
