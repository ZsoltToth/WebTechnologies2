/**
 * Created by tothzs on 2018.03.05..
 */
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var calculator = require('./routes/calculator');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.get('/',function(req,res){
    res.send('hello world');
});

app.use('/',calculator);

app.listen(8080, function(){console.log("Server listens on 8080.")});