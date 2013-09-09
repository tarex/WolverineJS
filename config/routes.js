


module.exports = function(app,cont,passport){	

	app.get('/',cont.signup.index);
	app.get('/signup',cont.signup.index);
	app.get('/hello',cont.great.something);
	app.get('/home',cont.home.index);

	app.get('/signin',cont.signup.login);



	// app.post('/signin',cont.signup.check);

	app.post('/signin',passport.authenticate('local',{
		successRedirect:'/home',
		failureRedirect: '/signin',
		failureFlash: 'Invalid email or password.'
	}));






	app.get('/istiaq',cont.signup.isti);
	app.get('/faruk',cont.home.faruk);
	app.get('/ex',cont.signup.exmp);


	app.post('/signup',cont.signup.create);


	app.get('/name/:name',function(req,res){
		req.session.name = req.params.name;
		res.send('<a href="/name">click</a>');
	});

	app.get('/name',function(req,res){
		res.send(req.session.name);
	});



}
