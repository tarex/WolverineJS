var express = require('express')
	, app = express()
	;





/*
|--------------------------------------------------------------------------
|  MVC load 
|--------------------------------------------------------------------------
*/

var controller = require('./controllers');
				 require('./models')();

require('./routes')( app , express , controller);


/*
|--------------------------------------------------------------------------
|  Configuration override 
|--------------------------------------------------------------------------
*/

var env = require('./config/load');


/*
|--------------------------------------------------------------------------
|  From load , basic dependency
|--------------------------------------------------------------------------
*/

require('./load/index')(app);
require('./load/view')(app,express);
require('./load/http')(app);
