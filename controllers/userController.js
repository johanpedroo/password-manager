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