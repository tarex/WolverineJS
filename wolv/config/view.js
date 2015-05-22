var nunjucks = require('nunjucks')
	, fs = require('fs')
	, path = require('path')
	, appRoot = require('app-root-path').path
	;


  module.exports = function( app ,express ){

		// static file 
		app.use( express.static(path.join( appRoot , 'public')) );

	 
		var nunjucksEnv = new nunjucks.Environment(
			 new nunjucks.FileSystemLoader( path.join( appRoot, '/app/views' ) )
		);
		nunjucksEnv.express( app );




  }