var express = require('express');
var app = express();
const port = 8080;
var bodyParser = require('body-parser');

app.use(bodyParser.json());

var parkingLogController = require('./parkingLotController');
app.use('/',parkingLogController);

app.listen(port, ()=>{
    console.log(`Server is listening on ${port}`)
})
