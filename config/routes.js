


module.exports = function(app,cont){	

	app.get('/',cont.todo.index);
	app.get('/hello',cont.great.something);

}
