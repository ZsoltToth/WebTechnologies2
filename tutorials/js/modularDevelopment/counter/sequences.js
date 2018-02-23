/**
 * Created by tothzs on 2018.02.19..
 */
function Arithmetic(baseValue, difference) {
    this.baseValue = typeof baseValue != 'undefined' ? baseValue : 0;
    this.difference = typeof difference != 'undefined' ? difference : 1;
    this.currentPosition = 0;
}

Arithmetic.prototype.next = function(){
    return this.baseValue + this.currentPosition++ * this.difference;
}

function Geometric(alpha, ratio){
    this.alpha = typeof alpha != 'undefined' ? alpha : 1;
    this.ratio = typeof ratio != 'undefined' ? ratio : 0.5;
    this.currentPosition = 0;
}

Geometric.prototype.next = function(){
    return this.alpha * Math.pow(this.ratio, this.currentPosition++);
}

exports.Arithmetic = Arithmetic;
exports.Geometric = Geometric;