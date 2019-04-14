
//import nodemodule
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
const mongoose = require("mongoose");

//import from custom files
var wholeObj = require('./someFile');
var userRoute = require('./routes/user');
var todosRoutes = require('./routes/todos');
var dbConnection = require ('./config/dbConnection');
//app create
var app = express();


// wholeObj.method();
// console.log('function',);
// console.log('name',wholeObj.name);
// console.log('lastname',wholeObj.lastName);


//add middleware
var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//db connection
dbConnection();


///user routes
app.use('/',userRoute);
app.use('/todo',todosRoutes);



app.listen(8080, function() {
  console.log("express server running on port 8080");
});
