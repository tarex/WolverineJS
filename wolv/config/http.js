var http = require('http');

  module.exports = function( app ){

		var port = normalizePort(process.env.PORT || '3000');
		app.set('port', port);
		var server = http.createServer(app);
		server.listen(port);
		console.log("starting server");

		function normalizePort(val) {
		  var port = parseInt(val, 10);
			  if (isNaN(port))  return val;
			  if (port >= 0)  return port;		  
		  return false;
		}

  }








		


