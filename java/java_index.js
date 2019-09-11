var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());
var compiler = require('compilex');
var option = {stats : true }
compiler.init(option)

app.post('/java',(req,res)=>{
//console.log(req.body.input);
// getting code and parameters
// var code = req.body.code;
// var input = req.body.input;
// var inputRadio = req.body.inputRadio;
// var lang = req.body.lang;

// var envData = {OS : "linux"};

// 	if(inputRadio === "true")
// 	{
		    
		
// 		compiler.compileJavaWithInput( envData , code , function(data){
// 			res.send(data);
// 		});
// 	}
// 	else
// 	{
		    
		
// 		compiler.compileJavaWithInput( envData , code , input ,  function(data){
// 			res.send(data);
// 		});

// 	}

res.send("Under Construction")


});




app.get('/fullStat' , function(req , res ){
    compiler.fullStat(function(data){
        res.send(data);
    });
});
app.listen(80);
