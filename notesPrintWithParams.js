// while https is built-in to Node, it is a module, so it must be required
var https = require('https');                               
// the host can be thought of as the domain name you want to read from,
// and the path is the resource - '/' is the root path, but if you wanted to read a
// particular resource (like '/login/index.html'), that would be defined in the path
function getAndPrintHTML (options) {
    
  // notice that https.get takes a callback with one parameter -
  // response, which is a Stream that represents the HTTP response
  https.get(options, function (response) {
    // set encoding of received data to UTF-8
    response.setEncoding('utf8');
    var buf = '';
    response.on('data',function(chunk){
      buf += chunk;
    });
    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function() {
      console.log('Response stream complete');
      console.log(buf);
    });
  });
}
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};
getAndPrintHTML(requestOptions);

// var requestOptions = {
  //     host: host,
  //     path: path
  //     }
  //     var host = requestOptions.host;
  //     var path = requestOptions.path;
  //   return options = (host, path)