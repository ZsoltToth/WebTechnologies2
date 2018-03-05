/**
 * Created by tothzs on 2018.03.05..
 */
var express = require('express');
var router = express.Router();
var calcualtorService = require('../my_module/calculatorService');

router.get('/add',function (req,res) {
    var a = parseInt(req.query['a']) || 0;
    var b = parseInt(req.query['b']) || 0;
    var result = calcualtorService.add(a,b);
    res.send(''+result);
});

router.get('/sub',function (req,res) {
    var a = parseInt(req.query['a']) || 0;
    var b = parseInt(req.query['b']) || 0;
    var result = calcualtorService.sub(a,b);
    res.send(''+result);
});

router.get('/mul',function (req,res) {
    var a = parseInt(req.query['a']) || 0;
    var b = parseInt(req.query['b']) || 0;
    var result = calcualtorService.mul(a,b);
    res.send(''+result);
});

router.get('/div',function (req,res) {
    var a = parseInt(req.query['a']) || 0;
    var b = parseInt(req.query['b']) || 0;
    var result = calcualtorService.div(a,b);
    res.send(''+result);
});

module.exports = router;