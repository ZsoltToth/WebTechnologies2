/**
 * Created by tothzs on 2018.03.26..
 */
var express = require('express');
var router = express.Router();

router.get('/listCars',function(req,res){
    var cars = [
        {id:0, plateNo:"ABC123", color:"blue", producer:"Suzuki", brand:"Swift", yearOfProduction:2000},
        {id:1, plateNo:"DEF123", color:"green", producer:"Suzuki", brand:"Swift", yearOfProduction:2000},
        {id:2, plateNo:"GHI123", color:"blue", producer:"Opel", brand:"Astra", yearOfProduction:2000}
    ];
    res.status(200).send(cars);
});

module.exports = router;