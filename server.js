var express = require('express');
var app = express();
var port = "3002";

server.use(express.static(__dirname));

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    res.render('pages/index');
});

server.listen(port, function(){
    console.log('the port is on')
});