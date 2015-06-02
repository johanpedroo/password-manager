var db_string = 'mongodb://localhost/password-system';

var mongoose = require('mongoose').connect(db_string);

var db = module.exports = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro ao conectar no banco'));


db.once('open', function(){
	var Users = mongoose.Schema({
		name:{type: String},
		email:{type: String},
		password:{type: Number}
	});
	
	console.log("DB Rodando");

});