var https = require('https'); 
var httpFunctions = require('../httpFunctions'); 
var getHTML = httpFunctions.getHTML; 

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printHTML(html) {
    console.log(getHTML.html.LowerCase());
  }
// console.log(getHTML(requestOptions, printHTML));
//   //callbacks #6
// function printToLowercase(html) {
//   console.log(html.toLowerCase());
// }
// httpFunctions.getHTML(requestOptions, printToLowercase);

var upperCase = getHTML(requestOptions, function(word) {
  return getHTML.toUpperCase();
});
console.log(upperCase);
// console.log(getHTML(requestOptions, printHTML));
//console.log(getHttp.requestOptions.host);
//name it as a variables so you can access the functions inside them