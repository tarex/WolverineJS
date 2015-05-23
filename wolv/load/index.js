var cookieParser = require('cookie-parser')
   , bodyParser = require('body-parser')
   ;

module.exports = function( app ){

	// general configuration 
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(cookieParser());

	
	
}	