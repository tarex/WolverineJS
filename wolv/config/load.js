var fs = require('fs')
	, path = require('path')
	, merge = require('merge')
	, glob = require('glob')
	, appRoot = require('app-root-path').path
	;

	
	var app_config = [
			'app',
			'cache'
	];



	glob.sync( appRoot + '/config/**/*.js' ).forEach( function( file ) {
	  	
		var filename = file.substr(0, file.indexOf('.'));
		var splitname = filename.split('config/');
		var configModule =  splitname[splitname.length-1];
		
		configModule = configModule.replace('/', '.');

		if( app_config.indexOf(configModule) != -1 ){
				
		}

	});



/**
	- get all the files form config 
	- make an array of package config 
	- jodi match hoi , tahole merge korte hobe 

 */



	// var env = {
	//     'hi' : 'hello'
	// };

	// console.log(merge(data, env));

