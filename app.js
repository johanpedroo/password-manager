var app = require('./app_config.js');
var db = require('./db_config.js');
var userController = require('./controllers/userController.js');
var session;

        
app.post('/login', function (req, res){
    var email = req.body.email;
    var password = req.body.password;

    loginController.user(email, password, function(err, user){
        if(!err){
            if(user.email){
                req.session.user.email = user.email;
                req.session.user.name = user.name;
                req.session.user.logado = true;

                res.json(req.session.user);
            }
            console.log(err);
        }
    });
});

app.get('/login', function (req, res){
    if(req.session.user){
        res.jsonp({
            email:req.session.user.email,
            logado:true
        })
    }else{
        res.json({err:'Erro no login'})
    }
});