var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
 
var app = module.exports = express();
 
var allowCors = function(req, res, next){
        res.header('Access-Control-Allow-Origin', '127.0.0.1:3000');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        res.header('Access-Control-Allow-Credentials', 'true');
        next(); 
};

app.use(bodyParser.urlencoded({ extended:false }));
app.use(cookieParser());

app.use(session({

	secret: 'shhhhhhhhhhh',
	resave: true,
	saveUninitialized: true

}));


app.use(express.static(path.join(__dirname+'/public')));

var port = process.env.PORT || 1337;

app.listen(port , function(){
	console.log('http://localhost:'+ port +'/');
});