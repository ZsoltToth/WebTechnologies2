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
    if(typeof req.query['plateNo'] != 'undefined'){
        Car.find({'plateNo' : req.query['plateNo']}).exec(function(err,doc){
            res.status(200).send(doc);
        });
        console.log('plateNo is %s',req.query['plateNo']);
        return;
    }
    Car.find({}).exec(function(err, doc) {
        res.status(200).send(doc);
    });

});

router.post('/cars/record',function(req,res){

    Car.create({
        _id : new mongoose.Types.ObjectId(),
        plateNo : req.body['plateNo'],
        color : req.body['color'],
        producer : req.body['producer'],
        brand : req.body['brand'],
        yearOfProduction : req.body['yearOfProduction']
    }, function (err,doc) {
        if(err){
            return console.log(err);
        }
        console.log(err);
        console.log(doc);
        res.status(415).send(err +' '+doc);
    });
});

router.post('/cars/update',function(req,res){

    Car.find({'plateNo' : req.body['plateNo']}).exec(function(err,cars){
        if(err){
            console.log(err);
        }
        for(var i = 0; i < cars.length; i++){
            cars[i].color = req.body['color'];
            cars[i].producer = req.body['producer'];
            cars[i].brand = req.body['brand'];
            cars[i].yearOfProduction = req.body['yearOfProduction'];
            cars[i].save();
        }
        res.status(200).send(cars);
    });
});

router.get('/cars/remove',function(req,res){
    if(typeof req.query['plateNo'] == 'undefined'){
        res.status(415).send('Plate Number is required!');
    }
    Car.remove({'plateNo' : req.query['plateNo']}, function(err){console.log(err);});
    res.status(200).send(req.query['plateNo']+' has been removed!');
});


module.exports = router;