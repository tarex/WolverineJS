

 var mongoose = require('mongoose')
    ,Users = require('../models/users').Users
    ,Post = require('../models/article').Article;


 exports.index = function(req , res){


    new Post({
    	title:'hellow world',
    	body:'ami jani na'
    }).save();

 	Post.find({},function(err,docs){
 		if(err) throw err;
 		res.render('home.html',{posts:docs});
 	});
 	
 }


 exports.faruk = function(req,res){
 	res.render('home.html',{data:'tumi janle na faruk'});

 }
