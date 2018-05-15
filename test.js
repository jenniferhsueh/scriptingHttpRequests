// function getAndPrintHTMLChunks () {
  var https = require('https');

  var options = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  // called by https when the request is made.
  var callback = function(response) {
    response.on('data', function(chunk) {
      console.log('[-- CHUNK OF LENGTH ' + chunk.length + ' --]');
      console.log(chunk.toString());
      console.log(response.statusCode);
    });
  }

https.request(options, callback).end();



