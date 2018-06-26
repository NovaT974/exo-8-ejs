var express = require('express');
var server = express();
var request = require ('request');
var port = "6002";

server.use(express.static(__dirname));

server.set('view engine', 'ejs');

server.get('/', function (req, res) {
    getnom(res)

    // var test = "Je suis la page d'accueil";

});


function getnom(res){
    var prenom = "Nova";
    res.render('index', {
        prenom: prenom
    });
}


server.listen(port, function(){
    console.log('the port is on')
});