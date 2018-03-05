/**
 * Created by tothzs on 2018.03.05..
 */
function add(a,b){return a+b;}
function sub(a,b){return a-b;}
function mul(a,b){return a*b;}
function div(a,b) {return a/b;}
function fact(n) {
    // console.log(n);
    if (n <= 1) {
        return 1;
    }
    return n * fact(n - 1);
}
function sum(nums){
    var result = 0;
    for(i = 0; i < nums.length; i++){
        result += nums[i];
    }
    return result;
}

exports.add = add;
exports.sub = sub;
exports.mul = mul;
exports.div = div;
exports.fact = fact;
exports.sum = sum;