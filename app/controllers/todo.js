

 var mongoose = require('mongoose')
    ,Users = require('../models/todo').Users;



  Users = mongoose.model('Users');



exports.index = function(req, res){

	//console.log('hello there');
  Users.find({},function( err,docs){
  	  if(err) throw err;

  	  res.render('index.html', { title: 'Wolverine JS ',users:docs });

  });	
  
};
