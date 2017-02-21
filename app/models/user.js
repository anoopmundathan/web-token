// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	name: String,
	password: String,
	admin: Boolean
});

var User = mongoose.model('User', userSchema);

// set up a mongoose model and pass it using module.exports
module.exports.User = User;


