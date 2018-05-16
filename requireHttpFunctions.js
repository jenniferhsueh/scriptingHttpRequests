var httpFunctions = require('./httpFunctions'); 
var getHTML = httpFunctions.getHTML;


var https = require('https');  

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printHTML(html) {
    console.log(html);
  }
console.log(getHTML(requestOptions, printHTML));
  //callbacks #6
// function printToUppercase(html) {

// }
// httpFunction.getHTML(requestOptions, printToUppercase);

// console.log(getHTML(requestOptions, printHTML));
//console.log(getHttp.requestOptions.host);
//name it as a variables so you can access the functions inside them