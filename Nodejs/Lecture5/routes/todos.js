
var app = require('express').Router();
var studentCollection = require('../models/studentSchema');

app.get("/savetodb", function(req, res) {
    console.log("request recive");
  
    let saveNewRow = new studentCollection();
    saveNewRow.name = "ali";
    saveNewRow.age = 25;
    saveNewRow.bio = "student";
  
    saveNewRow.save((err, save) => {
      if (err) {
        res.json("error occored");
      } else {
        res.json("data saved");
      }
    });
  });


  app.get("/getQuery", function(req, res) {
    studentCollection
      // .find({"name": /.*a.*/})
      .find()
      // .limit(2)
      .sort({ createdAt: 1 })
      // .select("name")
      .exec((err, data) => {
        if (err) {
          res.json("error occored");
        } else {
          res.json(data);
        }
      });
  });
  

  app.get("/getDataFromDb", function(req, res) {
    // .findOne()
    // .find()
  
    conmenetTable
      .find()
      .where("name")
      // .in(['namme','Asif','Naveed'])
      // .and([{age:21},{name:'Naveed'}])
      // .and([{age:21},{name:'Asif'}])
      .where("age")
      .lt(50)
      .gte(12)
      .limit(2)
      .sort({ age: -1 })
      .select("name age")
      .exec(function(err, data) {
        if (err) {
          console.log(err);
  
          res.json("error");
        }
        res.json(data);
        // athletes contains an ordered list of 5 athletes who play Tennis
      });
  });
  
  

app.get("/updateSingle", function(req, res) {
    studentCollection
      .findOneAndUpdate()
      .where("age")
      .equals(25)
      .set({ name: "talha" })
      .exec(function(err, data) {
        if (err) {
          console.log(err);
  
          res.json("error");
        }
        res.json(data);
        // athletes contains an ordered list of 5 athletes who play Tennis
      });
  });
  
  app.get("/updateAll", function(req, res) {
    studentCollection
      .updateMany()
      .where("age")
      .equals(25)
      .set({ name: "sir khuram" })
      .exec(function(err, data) {
        if (err) {
          console.log(err);
  
          res.json("error");
        }
        res.json(data);
        // athletes contains an ordered list of 5 athletes who play Tennis
      });
  });
  
  app.get("/deleteSingle", function(req, res) {
    studentCollection
      .findOneAndDelete()
      .where("age")
      .equals(25)
      .exec(function(err, data) {
        if (err) {
          console.log(err);
  
          res.json("error");
        }
        res.json(data);
        // athletes contains an ordered list of 5 athletes who play Tennis
      });
  });
  
  app.get("/deleteAll", function(req, res) {
    studentCollection
      .deleteMany()
      .where("age")
      .equals(21)
      .exec(function(err, data) {
        if (err) {
          console.log(err);
          res.json("error");
        }
        res.json(data);
        // athletes contains an ordered list of 5 athletes who play Tennis
      });
  });

module.exports = app;