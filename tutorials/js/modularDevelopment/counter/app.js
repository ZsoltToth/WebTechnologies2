/**
 * Created by tothzs on 2018.02.19..
 */

/**
 * Counter is defined in the counterClosure.js file
 * counter variable is initialized with the closure whose initVal paramter is 4.
 */
var counter = require('./counterClosure')(4);
console.log(counter.getValue());
counter.increase();
counter.increase();
console.log(counter.getValue());

/**
 * cntPrototype is a function which initialize a counter.
 * cnt and cnt2 are two counter with 5 and -3 starting value;
 */
var cntPrototype = require('./counterClosure');

var cnt = cntPrototype(5)
var cnt2 = cntPrototype(-3);
console.log(cnt.getValue());
cnt.increase();
console.log(cnt.getValue());
cnt.increase();
cnt.increase();
console.log(cnt.getValue());

console.log(cnt2.getValue());
cnt2.increase();
console.log(cnt2.getValue());
cnt2.increase();
cnt2.increase();
console.log(cnt2.getValue());


/**
 * Counter is defined as an Object in the counterObject.js file.
 * cntConstructor function can be considered as its parameter.
 * counter and counter2 are instantiated with 3 and 0 starting values.
 */
console.log('counter object #1')
var cntConstructor = require('./counterObject');
var counter = new cntConstructor(3);
console.log(counter.getValue());
counter.increase();
console.log(counter.getValue());

console.log('counter object #2');
var counter2 = new cntConstructor(0);//new (require('./counterObject'))(0);
console.log(counter2.getValue());
counter2.increase();
console.log(counter2.getValue());

/**
 * sequences is a JS library which contains different sequences (Arithmetic, Geometric).
 * Each sequence has a next() function which returns with the next value of the corresponding sequence and shifts the index.
 *
 */
var sequences = require('./sequences');
var arithmetic = new sequences.Arithmetic(0,-5);
console.log(arithmetic.next());// => 0
console.log(arithmetic.next());// => -5
console.log(arithmetic.next());// => -10
var geometric = new sequences.Geometric(1,2);
console.log(geometric.next());// => 1
console.log(geometric.next());// => 2
console.log(geometric.next());// => 4


