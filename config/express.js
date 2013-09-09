

 var express = require('express')
     ,path = require('path')
     ,passport = require('passport')
     ,flash = require('connect-flash');

 module.exports = function(app, config , passport){



    app.configure(function(){
	  app.set('port', process.env.PORT || 3000);
	  app.set('views', __dirname + '/app/views');
	  //app.set('view engine', 'jade');
	  app.use(express.favicon());
	  app.use(express.logger('dev'));
	  app.use(express.bodyParser());
	  app.use(express.methodOverride());

	  app.use(express.cookieParser());
	  app.use(express.session({
	  	cookie: {
	  	 path: '/', 
	  	 httpOnly: true, 
	  	 maxAge: null 
	  	}, secret:'wolverineblog'}));



	  app.use(flash());
	  app.use(passport.initialize());
 	  app.use(passport.session());

	  app.use(app.router);

	  app.use(express.static(config.root + '/public'));
	  //app.use(express.static(path.join(__dirname, 'public')));
	  //app.use(express.static( __dirname +'/public'));
	});

	app.configure('development', function(){
	  app.use(express.errorHandler());
	});
 }