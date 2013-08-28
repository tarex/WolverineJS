
var mongoose = require('mongoose')   
  ,Schema = mongoose.Schema;

 var UserSchema = new Schema({
     name:String,
     email:String,
     age:Number
 });

Users = mongoose.model('Users',UserSchema);

module.exports = {
  Users: Users
}