var express = require('express');
var app = express();

app.use(express.static("."));

app.get('/', function(req,res){
	console.log('serving index.html'); 
	res.sendFile(__dirname + '/index.html'); 
});

app.listen(8081);