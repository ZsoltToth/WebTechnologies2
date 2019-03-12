var express = require('express');
var router = express.Router();

const ParkingLot = require('./parkingLot');
const Car = require('./car');

var parkingLot = new ParkingLot([2,3,4]);

router.get('/parkinglot/:slot',(req,res) =>{
    console.log(req.params.slot);
    res.status(200).send(''+parkingLot.checkSlot(req.params.slot));
});

router.post('/parkinglot/park',(req,res)=>{
    try{
        var car = new Car(req.body['plateNo'],req.body['color']);
        var slot = parkingLot.parkCar(car);
        res.status(200).send(''+slot);
    }
    catch(e){
        res.status(414).send(e.toString());
        return;
    }
});

router.get('/parkinglot',(req,res)=>{
    var result = {};
    var shift = 0;
    for( var levelIndex = 0; levelIndex < parkingLot.slotsPerLevel.length; levelIndex++){
        result[`L${levelIndex}`] = [];
        for(var slotIndex = 0; slotIndex < parkingLot.slotsPerLevel[levelIndex]; slotIndex++){
            result[`L${levelIndex}`].push(parkingLot.slots[shift+slotIndex]);
        }
        shift += parkingLot.slotsPerLevel[levelIndex];
    }
    res.status(200).send(result);
});

module.exports = router;