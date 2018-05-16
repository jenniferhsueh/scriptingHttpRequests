var https = require('https');   
var requestOptions = {    //does this matter where it is???
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

function getAndPrintHTML (options) {

  https.get(requestOptions, function (response) {
    var body = "";
  
    response.setEncoding('utf8');

    response.on('data', function (chunk) {
      body += chunk
      console.log('Chunk Received. Length:', chunk.length);
    });
    
    response.on('end', function() {
      console.log('Response stream complete.');
      console.log(body);
    });
  });
}
//passing below object in as a variable
// var requestOptions = {
//   host: 'sytantris.github.io',
//   path: '/http-examples/step3.html'
// };
getAndPrintHTML(requestOptions);