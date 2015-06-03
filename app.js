var app = require('./app_config.js');
var db = require('./db_config.js');
var userController = require('./controllers/userController.js');
var session;

        
app.post('/login', function (req, res){
    var email = req.body.email;
    var password = req.body.password;

    userController.Users(email, password, function(err, Users){
        if(!err){
            if(Users.email){
                req.session.Users.name = user.name;
                req.session.Users.email = user.email;
                req.session.Users.logado = true;

                res.json(req.session.Users);
            }
            res.json({err:'Error'});
        }
    });
});

app.get('/login', function (req, res){
    if(req.session.user){
        res.jsonp({
            email:req.session.user.email,
            name:req.session.user.name,
            logado:true
        })
    }else{
        res.json({err:'Erro no login'})
    }
});