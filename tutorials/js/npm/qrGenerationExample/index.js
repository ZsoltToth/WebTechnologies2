/**
 * Created by tothzs on 2018.02.26..
 */

var text = 'Hello World';
console.log(text);

var qrCode = require('qrcode-npm');

var qr = qrCode.qrcode(4, 'M');
qr.addData(text);
qr.make();

var img = qr.createImgTag(4);    // creates an <img> tag as text
var table = qr.createTableTag(4);  // creates a <table> tag as text

console.log('Img');
console.log(img);
console.log('Table');
console.log(table);