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

var server = http.createServer(app);


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




// socket io



var io = require("socket.io").listen(server)

io.sockets.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
});

// Send current time to all connected clients
function sendTime() {
    io.sockets.emit('time', { time: new Date().toJSON() });
}

// Send current time every 10 secs
setInterval(sendTime, 10000);

// Emit welcome message on connection
io.sockets.on('connection', function(socket) {
    socket.emit('welcome', { message: 'Welcome!' });

    socket.on('i am client', console.log);

    
    socket.on('message', function(data) {
      socket.broadcast.send(data);
    });


})














 // bootstrap routes
 require('./config/routes')(app,cont,passport);



server.listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});


exports = module.exports = app
