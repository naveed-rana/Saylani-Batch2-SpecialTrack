var express = require('express');
var app = express();

app.get('/',function (req,res) {
    
    res.end('server running handle / request')
});

app.post('/test',function (req,res) {
    
     console.log('req',req);
     
    res.end('request handle from server get route /test');
});

app.listen(8080, function () {
    console.log('express server running on port 8080');
    
});