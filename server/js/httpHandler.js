const headers = require('./cors');

module.exports = (req, res) => {

var objectIdCounter = 1;
var messages = [];

function randomMove() {
  var moves = ['left', 'right', 'up', 'down'];
  var random = moves[Math.floor(Math.random() * 4)];
  return random;
}

  headers['Content-Type'] = 'text/plain';

  var sendResponse = function(response, data, statusCode) {
    statusCode = statusCode || 200;
    response.writeHead(statusCode, headers);
    response.end(data);
  };

  if (req.method === 'GET') {
    statusCode = 200;
    var rando = randomMove();
    res.writeHead(statusCode, headers);
    res.end(rando);
  }

  if(req.method === 'POST'){
    var data = '';
    function callback(message, resp) {
      message.objectId = ++objectIdCounter;
      messages.push(message);
      sendResponse(res, {objectId: message.objectId}, 201);
    };
    req.on('data', function(chunk) {
      data += chunk;
    });
    req.on('end', function() {
      callback(data);
    });
    // res.end();
  }
};