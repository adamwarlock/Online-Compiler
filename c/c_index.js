var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());
var compiler = require('compilex');
var option = {stats : true }
compiler.init(option)

app.post('/c',(req,res)=>{

	var code = req.body.code;
	var input = req.body.input;
	var inputRadio = req.body.inputRadio;
	var lang = req.body.lang;

var envData = {OS : "linux", cmd:"gcc"};

if(inputRadio === "true")
        {    
        		   	
        	compiler.compileCPPWithInput(envData , code ,input , function (data) {
        		if(data.error)
        		{
        			res.send(data.error);    		
        		}
        		else
        		{
        			res.send(data.output);
        		}
        	});
	   }
	else{
	compiler.compileCPP(envData, code, (data)=>{
	if(data.error)
		res.send(data.error);
	else
		res.send(data.output);
	
	
	});
}

});
app.listen(80);
