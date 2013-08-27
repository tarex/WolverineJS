

	var mongoose = require('mongoose');
	// mongoose.connect('mongodb://localhost/todo');


	var Todo = new mongoose.Schema({
	    user_id    : String,
	    content    : String,
	    updated_at : Date
	});

	mongoose.model('Todo', Todo );
