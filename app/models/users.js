

 var mongoose = require('mongoose')
 	,Schema = mongoose.Schema
 	,crypto = require('crypto');



 var UserSchema = new Schema({
  name: { type: String, default: '' },
  email: { type: String, default: '' },
  username: { type: String, default: '' },
  password: { type: String, default: '' },

})






User = mongoose.model('User',UserSchema);




module.exports = {
  User: User
}