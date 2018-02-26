/**
 * Created by tothzs on 2018.02.26..
 *
 * Example was created based on this tutorial.
 * https://www.npmjs.com/package/qr-code-js
 *
 * The current time is converted into a QR code then it is written into the index.html file.
 *
 * 1) npm install
 * 2) node index.js
 * 3) Browser -> Open index.html
 * 4) Phone QR Code Reader & have fun.
 */
var text = new Date().toUTCString();
var fs = require('fs');
var qrCode = require('qrcode-npm');

var qr = qrCode.qrcode(5, 'M');
qr.addData(text);
qr.make();

var img = qr.createImgTag(4);    // creates an <img> tag as text
// var table = qr.createTableTag(4);  // creates a <table> tag as text

fs.writeFile('index.html',img);