var mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Comment = new Schema({
  name: String,
  age: Number,
  bio: String,
  createdAt: { type: Date, default: Date.now }
});
const studentCollection = mongoose.model("student", Comment);

module.exports = studentCollection;
