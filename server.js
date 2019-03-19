// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

console.log(__dirname);
// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/api/timestamp/:datestring",function(req,res){
  
  
  if(isNaN(new Date(req.params.datestring).getTime())){
     res.json({error: 'Invalid Date'});
    
  }
  else
  res.json({unix: new Date(req.params.datestring).getTime(), utc: new Date(req.params.datestring).toUTCString()});
});

app.get("/api/timestamp",function(req,res){
  
  if(!(req.params.datestring)){
    console.log('undefined');
  };
  
  res.json({unix: new Date().getTime(), utc: new Date().toUTCString()});
});

// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});