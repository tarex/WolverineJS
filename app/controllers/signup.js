
 var mongoose = require('mongoose')
    ,User = require('../models/users').User
    ,passport = require('passport')
    ,LocalStrategy=require('passport-local').Strategy;






 exports.index = function(req , res){
 	User.find({},function(err,docs){
 		if(err) throw err;
 		res.render('signup.html',{title:'Please Sign up'});
 	});
 	
 }


 exports.create = function(req,res){
 	b = req.body;


  new User(req.body).save(function(err,docs){
  	if(err) throw err;
  	res.render('home.html',{email:docs.email});
  });

 }



  exports.login = function(req,res){
  	res.render('signin.html');
  }

  // exports.check = function(req,res){
  // 	b = req.body;
  // 	User.findOne({username:b.username,password:b.password},function(err,docs){
  // 		if(err) throw err;
  // 		if(docs)
  // 		res.render('home.html',{user:docs});
  // 		else
  // 		{
  // 			res.render('signin.html',{ message: req.flash('info') });
  // 		}
  		

  // 	});
  // }



  // exports.check = function(req,res){
  //   b = req.body;
  //   User.findOne({username:b.username,password:b.password},function(err,docs){
  //     if(err) throw err;
  //     if(docs)
  //     res.render('home.html',{user:docs});
  //     else
  //     {
  //       res.render('signin.html',{ message: req.flash('info') });
  //     }
      

  //   });
  // }














  exports.isti = function(req,res){
    res.render('isti.html',{title:'shaad istiaq rocks'})

  }

  // module.exports ={
  //   exmp: function(req,res){
  //       res.send('working');

  //   }
  // };

  exports.exmp = function(req,res){
    res.send("hello");
  }

