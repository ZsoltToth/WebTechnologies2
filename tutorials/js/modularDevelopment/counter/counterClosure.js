/**
 * Created by tothzs on 2018.02.19..
 */

module.exports =(function(initVal) {
    var value = typeof initVal != 'undefined' ? initVal : 0;

    function increase () {
        return value++;
    }
    function getValue() {
        return value;
    }
    return {
        increase : increase,
        getValue : getValue
    };
});