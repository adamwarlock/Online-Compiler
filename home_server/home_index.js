var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser());

app.get('/' , function (req , res ) {

	res.sendfile( __dirname + "/homepage.html");

});




app.listen(80);
