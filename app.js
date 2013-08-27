
/**
 * Module dependencies.
 */

var express = require('express')
  , cont = require('./app/controllers')
  , http = require('http')
  , path = require('path')
  , fs = require('fs')
  , nunjucks = require('nunjucks')
  , mongoose = require('mongoose');


 

var env = 'dev';


// bootstrap db and other

var config = require('./config/config')[env];


// db connect
mongoose.connect(config.db);



// bootstrap models
var models_path = __dirname + '/app/models'
fs.readdirSync(models_path).forEach(function (file) {
  if (~file.indexOf('.js')) 
    require(models_path + '/' + file);
    console.log(file);
})



var app = express();

// express configuration

require('./config/express')(app,config);




// template engine 

var env = new nunjucks.Environment(new nunjucks.FileSystemLoader('app/views'));
env.express(app);



 // bootstrap routes
 require('./config/routes')(app,cont);



http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
