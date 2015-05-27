var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
 
var app = express();
 
var allowCors = function(req, res, next){
        res.header('Access-Control-Allow-Origin', '127.0.0.1:3000');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        res.header('Access-Control-Allow-Credentials', 'true');
 
        next();
 
};
app.use(express.static(path.join(__dirname+'/public')));
 
app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  console.log("Rodando");
});
app.use(allowCors);
 
app.use(bodyParser.json());
 
app.use(bodyParser.urlencoded({
        extended: true
}));