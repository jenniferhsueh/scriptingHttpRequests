var https = require('https'); 
var httpFunctions = require('../httpFunctions'); 
var getHTML = httpFunctions.getHTML; 

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printToLowerCase(html) {
    console.log(html.toLowerCase());
  }
// console.log(getHTML(requestOptions, printToUpperCase)); -same as above CL

httpFunctions.getHTML(requestOptions, printToLowerCase);
//object to key        /params       //callback function

// console.log(getHTML(requestOptions, printHTML));
//console.log(getHttp.requestOptions.host);
//name it as a variables so you can access the functions inside them