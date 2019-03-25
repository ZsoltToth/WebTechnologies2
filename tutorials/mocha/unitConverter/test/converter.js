var assert = require('assert')
var converter = require('../app/converter')
describe("distance conversion tests",function(){
    describe('meter2inch', function() {
        it('cheks 0 m == 0 in', function(){
            assert.equal(converter.meter2inch(0),0);
        });
        it('1m = 39.37in', function(){
            assert.equal(converter.meter2inch(1),39.37);
        })
        // it('will fail',function(){
        //     assert.fail('it fails intentionally')
        // })
        it('1 inch is 0.0254m',function(){
            var actual = converter.inch2meter(1)
            var expected = 0.0254
            var diff = Math.abs(actual - expected)
            var delta = 1e-4
            assert.equal(diff < delta, true)
        })
    });

})
describe('temperature converter tests', function(){
    it('check if 0C = 32F',function(){
        assert.equal(converter.celsius2fahrenheit(0),32)
    })
})