var distanceConverter = require('./distanceConverter')
var temperatureConverter = require('./temperatureConverter')

module.exports = {
    "meter2inch" : distanceConverter.m2i,
    "inch2meter" : distanceConverter.i2m,
    "fahrenheit2celsius" : temperatureConverter.f2c,
    "celsius2fahrenheit" : temperatureConverter.c2f
}