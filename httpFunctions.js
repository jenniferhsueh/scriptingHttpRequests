var https = require('https');
module.exports = {
  getHTML: function(options, callback) {  //OPTIONS here has to be named the same
// function getHTML(options, callback) {      //as the one below! params can be diff
  //http request that takes long   //function getting passed to https
    https.get(options, function (response) {  //html body
      var body = "";
    
      response.setEncoding('utf8');

      response.on('data', function (chunk) {
        body += chunk
        // console.log('Chunk Received. Length:', chunk.length);
        //if callback here, passing individual pieces of cake
        //accumulating here until it is done
      });
      
      response.on('end', function() {
        console.log('Response stream complete.');
        console.log(body);  //assistant store manager
        callback(body)  //body is the cakebox  //passing the whole cake entirety
          //like a movie that needs to buffer. you dont want it halfway,
          //you want to have the whole movie when its completely done buffering 
      });
    });
  }
  // printHTML: function(html) {
  //   console.log(html);
  // }
}

//passing below object in as a variable
// var requestOptions = {
//   host: 'sytantris.github.io',
//   path: '/http-examples/step4.html'
// };
// getHTML(requestOptions, printHTML);
// module.exports = {
//   getHTML: getHTML,
  // printHTML: printHTML,
  // requestOptions: requestOptions


// module.exports = getHTML;
// module.exports.printHTML = printHTML;
// module.exports.requestOptions = requestOptions;