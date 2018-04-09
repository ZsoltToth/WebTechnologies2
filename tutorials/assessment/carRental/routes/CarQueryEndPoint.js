/**
 * Created by tothzs on 2018.03.26..
 */
var express = require('express');
var router = express.Router();
var Car = require('./Car');
var mongoose = require('mongoose');

router.get('/listCars',function(req,res){
    /*
    var cars = [
        {id:0, plateNo:"ABC123", color:"blue", producer:"Suzuki", brand:"Swift", yearOfProduction:2000},
        {id:1, plateNo:"DEF123", color:"green", producer:"Suzuki", brand:"Swift", yearOfProduction:2000},
        {id:2, plateNo:"GHI123", color:"blue", producer:"Opel", brand:"Astra", yearOfProduction:2000}
    ];
    res.status(200).send(cars);
    */
    Car.find({}).exec(function(err, doc) {
        res.status(200).send(doc);
    });

});

router.post('/cars/record',function(req,res){

    Car.create({
        _id : req.body['id'],
        plateNo : req.body['plateNo'],
        color : req.body['color'],
        produrer : req.body['producer'],
        brand : req.body['brand'],
        yearOfProduction : req.body['yearOfProduction']
    }, function (err,doc) {

        console.log(err);
        console.log(doc);
        res.status(415).send(err +' '+doc);
    });
    res.status(200).send('');
});

module.exports = router;