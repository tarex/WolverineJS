var fs = require('fs')
	, path = require('path')
	, glob = require('glob')
	, appRoot = require('app-root-path').path
	;

module.exports = function(){

	glob.sync( appRoot + '/app/models/**/*.js' ).forEach( function( file ) {
	  	require( path.resolve( file ) );
	});


}