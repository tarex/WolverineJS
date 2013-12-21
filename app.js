/**
*######################################################################
*#  Wolverine JS 
*######################################################################
*/


var express = require('express')
  ,  fs = require('fs')
  , path = require('path')
  , http = require('http')
  , nunjucks = require('nunjucks')
  , cont = require('./app/controllers')
  , passport = require('passport');


 

var env = 'dev';


// bootstrap db and other

var config = require('./config/config')[env],
   mongoose = require('mongoose');



var app = express();




// db connect
//console.log(config.db);

mongoose.connect(config.db);


mongoose.connection.on('open', function (ref) {

  console.log('connected');
  
});
mongoose.connection.on('error', function (err) {
  console.log('Could not connect to mongo server!');
  console.log(err);
});







// bootstrap models
var models_path = './app/models';

fs.readdirSync(models_path).forEach(function (file) {

  if (~file.indexOf('.js'))  
    require(models_path + '/' + file); 
    console.log(file);
})





// passport config

require('./config/passport')(passport, config);







// express configuration

require('./config/express')(app,config,passport);




// template engine : nunjucks

var env = new nunjucks.Environment(new nunjucks.FileSystemLoader('app/views'));
env.express(app);

// nunjucks.configure('app/views', {
//     autoescape: true,
//     express: app
// });


 // bootstrap routes
 require('./config/routes')(app,cont,passport);



http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});


exports = module.exports = app
