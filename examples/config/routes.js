module.exports = function(router , controller){

		router.get('/', controller.home.index );

		router.get('/home',function(rep , res , next){
			res.send('hello there');
		});


	return router;
}
