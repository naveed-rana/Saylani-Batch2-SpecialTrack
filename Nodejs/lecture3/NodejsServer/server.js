var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var cors = require('cors')

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

const mongoose = require('mongoose');
mongoose.connect('mongodb://specialtrack:specialtrack12345@ds147965.mlab.com:47965/todo-olx', {useNewUrlParser: true},function (err) {
 
if(err){
    console.log('err',err)
}
else{
    console.log('successfully connected');
}
    
});


const Schema = mongoose.Schema;


const Comment = new Schema({
    name: String,
    age: Number,
    bio: String,
    date: { type: Date, default: Date.now },
  });

const conmenetTable = mongoose.model('comment',Comment);


 



app.get('/',function (req,res) {

    console.log('request from /');
    
     var data = {
         name:'naveed',
         age:'21'
     }
    res.json(data);
});




app.get('/savetodb',function (req,res) {

    console.log('request recive');

    let saveNewRow = new conmenetTable();

    saveNewRow.name = "Asif";
    saveNewRow.age = 21;
    saveNewRow.bio = 'developer';
  
    saveNewRow.save((err,save)=>{
        
       if(err){
           res.json('error occored')
       }
       else{
       res.json('data saved');
       }
      
    });
    
    
    
});





app.get('/getDataFromDb',function (req,res) {


    conmenetTable.find({},(err,data)=>{
        
       if(err){
           console.log('err',err);
           
           res.json('error occored')
       }
       else{
      console.log('data',data);
       res.json(data);
       }
      
    });
    
    
    
});




app.post('/test',function (req,res) {

     console.log('test');

    
    res.json('test');
});


app.listen(3030, function () {
    console.log('express server running on port 3030');
    
});
