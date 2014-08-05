var http = require("http");
var url = require("url");
//mongodb
// Retrieve
var MongoClient = require('mongodb').MongoClient;
// Connect to the db
var mongoDbConnection = require('connection.js');

function start(route) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;   

    route(pathname);
    response.setHeader("Content-Type", "application/json");
	
    if(pathname === "/getEmitter"){
        mongoDbConnection(function(databaseConnection) {        
            databaseConnection.collection('emitters', function(error, collection) {

                collection.find().toArray(function(error, results) {
                    //response.write();
                    response.end(JSON.stringify(results));
                    console.log(results);
              });
            });
        });
    } else if(pathname === "/getEmissor"){

    }
	
    
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;
