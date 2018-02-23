/**
 * Created by tothzs on 2018.02.19..
 */

function Counter(initVal) {
    this.cnt = typeof initVal != 'undefined' ? initVal : 0;
}

Counter.prototype.increase = function() {
    this.cnt++;
}
Counter.prototype.getValue = function() {
    return this.cnt;
}
module.exports = Counter;