var express = require('express');
var app = express();
const port = 8080;
var bodyParser = require('body-parser');

app.use(bodyParser.json());

const ParkingLot = require('./parkingLot');
const Car = require('./car');

var parkingLot = new ParkingLot([2,3,4]);

app.get('/parkinglot/:slot',(req,res) =>{
    console.log(req.params.slot);
    res.status(200).send(''+parkingLot.checkSlot(req.params.slot));
});

app.post('/parkinglot/park',(req,res)=>{
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

app.get('/parkinglot',(req,res)=>{
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



app.listen(port, ()=>{
    console.log(`Server is listening on ${port}`)
})
