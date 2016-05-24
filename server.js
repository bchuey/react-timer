// access to 'express' module
var express = require('express'); // use node keyword 'require' to load module

// create our app
var app = express();

// tell it which folder we want it to serve
// expose folder named 'public'
// 'index.html' is default for applications => must be named 'index'
app.use(express.static('public')); // allows you to add functionality to application

app.listen(3000, function() {

	console.log('Express server is up on port 3000!');

});