var https = require('https');   

function getAndPrintHTML () {
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function (response) {
    var body = "";

  response.setEncoding('utf8');

  response.on('data', function (chunk) {
    body += chunk
    console.log(body);
    console.log('Chunk Received. Length:', chunk.length);
  });

  response.on('end', function() {
    console.log('Response stream complete.');
  });
});
}
getAndPrintHTML();
