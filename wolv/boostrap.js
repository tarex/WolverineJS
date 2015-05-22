var express = require('express')  
	, app = express()
	;




var controller = require('./controllers');

require('./models')();

require('./config/routes')(app , express , controller);
require('./config/index')(app);
require('./config/view')(app,express);
require('./config/http')(app);









