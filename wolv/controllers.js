var fs = require('fs')
	, path = require('path')
	, glob = require('glob')
	, appRoot = require('app-root-path').path
	;



	glob.sync( appRoot + '/app/controllers/**/*.js' ).forEach( function( file ) {
	
		var filename = file.substr(0, file.indexOf('.'));
		var splitname = filename.split('controllers/');
		var moduleName =  splitname[splitname.length-1];
		
		moduleName = moduleName.replace('/', '.');
	  	exports[moduleName] = require( path.resolve( file ) );
	});


