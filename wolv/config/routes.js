var path = require('path')
  	, appRoot = require('app-root-path');

  module.exports = function( app , express , controller ){
  		
  		var router = express.Router();
		routes = require(appRoot+ '/config/routes')( router  , controller);		
		app.use(routes);  
  }