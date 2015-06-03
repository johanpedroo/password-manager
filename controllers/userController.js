var db = require('../db_config.js');

exports.user = function (email, password, callback) {
    db.Users.findOne({email:email,password:password} ,function (error, user) {
        if(error){
            callback({error:'Error returning the users'})
        }
        else{
            callback(null,user);
        }

    });

}
exports.save = function (email, password, name, callback) {
    new db.Users({
		'email': email,
		'password':password,
		'name':name
	}).save(function(error,resultado){
		if(error)
			callback(error);
		else
			db.Users.find({}, function(error, res){
			    console.log(res);
				if(error){
					callback({error:'Não foi possivel retornar os usuarios'});
				}
				else{
					callback(res);
				}
			});
			
	});	

}
