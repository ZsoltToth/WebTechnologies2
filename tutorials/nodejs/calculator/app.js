/**
 * Created by tothzs on 2018.03.05..
 */
var express = require('express');

var app = express();

app.get('/',function(req,res){
    res.send('hello world');
})

app.listen(8080, function(){console.log("Server listens on 8080.")});