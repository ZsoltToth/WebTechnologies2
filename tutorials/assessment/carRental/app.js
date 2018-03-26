/**
 * Created by tothzs on 2018.03.05..
 */
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var carQueryEndPoint = require('./routes/CarQueryEndPoint');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));



app.use('/',carQueryEndPoint);

app.listen(8080, function(){console.log("Server listens on 8080.")});