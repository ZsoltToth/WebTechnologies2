/**
 * Created by tothzs on 2018.03.05..
 */
var express = require('express');

var app = express();

app.get('/',function(req,res){
    res.send('hello world');
});

app.get('/add',function (req,res) {
    var a = parseInt(req.query['a']) || 0;
    var b = parseInt(req.query['b']) || 0;
    var result = a+b;
   res.send(''+result);
});

app.get('/sub',function (req,res) {
    var a = parseInt(req.query['a']) || 0;
    var b = parseInt(req.query['b']) || 0;
    var result = a-b;
    res.send(''+result);
});

app.get('/mul',function (req,res) {
    var a = parseInt(req.query['a']) || 0;
    var b = parseInt(req.query['b']) || 0;
    var result = a*b;
    res.send(''+result);
});

app.get('/div',function (req,res) {
    var a = parseInt(req.query['a']) || 0;
    var b = parseInt(req.query['b']) || 0;
    var result = a/b;
    res.send(''+result);
});

app.listen(8080, function(){console.log("Server listens on 8080.")});