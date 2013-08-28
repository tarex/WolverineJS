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
  , cont = require('./app/controllers');


 

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
})



// var cont_path = './app/controllers';

// fs.readdirSync(cont_path).forEach(function(file) {
//   if (file != 'index.js') {
//     var moduleName = file.substr(0, file.indexOf('.'));
//     exports[moduleName] = require(cont_path +'/' + moduleName);
//   // console.log(moduleName);
//   }
// });




// express configuration

require('./config/express')(app,config);




// template engine : nunjucks

var env = new nunjucks.Environment(new nunjucks.FileSystemLoader('app/views'));
env.express(app);



 // bootstrap routes
 require('./config/routes')(app,cont);



http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});


exports = module.exports = app
