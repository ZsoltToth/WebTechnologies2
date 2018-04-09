/**
 * Created by tothzs on 2018.04.09..
 */

var mongoose = require('mongoose');

var db = mongoose.createConnection('mongodb://localhost:27017/carRental', {autoIndex : true});
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
    console.log('MongoDB is Open');
});


var Schema = mongoose.Schema;

var CarSchema = new Schema({
    _id : Schema.ObjectId,
    plateNo : String,
    color : String,
    producer : String,
    brand : String,
    yearOfProduction : Number
});

module.exports = db.model('cars',CarSchema);