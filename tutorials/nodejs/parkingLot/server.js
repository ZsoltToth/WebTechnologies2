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



app.listen(port, ()=>{
    console.log(`Server is listening on ${port}`)
})
