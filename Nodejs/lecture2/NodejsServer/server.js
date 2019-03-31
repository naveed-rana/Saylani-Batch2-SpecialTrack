var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var cors = require('cors')

app.use(cors())

app.use(bodyParser.urlencoded({extended:true}))

app.use(bodyParser.json())



app.get('/',function (req,res) {

    console.log('request from /');
    
     var data = {
         name:'naveed',
         age:'21'
     }
    res.json(data);
});


app.use(function (req,res,next) {
    console.log('call test');
    // res.end('end from mid')
    next();
    
});


app.get('/test',function (req,res) {

    console.log('request from /test');
    
    
    res.end('server running ok')
});


app.post('/test',function (req,res) {

     console.log('req body',req.body);

     let result = req.body.rate * req.body.total;

    res.json(result);
});


app.listen(3030, function () {
    console.log('express server running on port 8080');
    
});