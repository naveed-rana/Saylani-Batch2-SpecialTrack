var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://test:test_1214@cluster0-fzdmf.mongodb.net/test?retryWrites=true",
  { useNewUrlParser: true },
  function(err) {
    if (err) {
      console.log("err", err);
    } else {
      console.log("successfully connected");
    }
  }
);

const Schema = mongoose.Schema;

const Comment = new Schema({
  name: String,
  age: Number,
  bio: String,
  createdAt: { type: Date, default: Date.now }
});

const studentCollection = mongoose.model("student", Comment);

app.get("/", function(req, res) {
  console.log("request from /");

  var data = {
    name: "naveed",
    age: "21"
  };
  res.json(data);
});

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

app.post("/test", function(req, res) {
  console.log("test");

  res.json("test");
});

app.listen(8080, function() {
  console.log("express server running on port 8080");
});
