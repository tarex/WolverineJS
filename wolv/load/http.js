var http = require('http');

  module.exports = function( app ){

		var port = normalizePort(process.env.PORT || '3000');
		app.set('port', port);

		http.createServer(app).listen(app.get('port'), function(){
		  console.log("Server listening on port " + app.get('port'));
		});



		function normalizePort(val) {
		  var port = parseInt(val, 10);
			  if (isNaN(port))  return val;
			  if (port >= 0)  return port;		  
		  return false;
		}

  }








		


