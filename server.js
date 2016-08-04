/**
 * Created by edward.lu on 8/3/2016.
*/
var express = require('express');
var favicon = require('serve-favicon');

var app = express();

app.get('/', function (req, res) {
    res.sendFile('index.html', {root: './'});
});

app.use(express.static(__dirname + '/'));

app.listen(3000, function () {
    console.log('Spec Ops on port 3000!');
});

app.use(favicon(__dirname + '/favicon.ico'));