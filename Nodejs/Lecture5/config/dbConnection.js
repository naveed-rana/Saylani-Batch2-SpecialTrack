var mongoose = require('mongoose');

function dbConnection() {

    mongoose.connect('mongodb+srv://test:test_1214@cluster0-fzdmf.mongodb.net/test?retryWrites=true',
  { useNewUrlParser: true },
  function(err) {
    if (err) {
      console.log("err", err);
    } else {
      console.log("successfully connected");
    }
  }
);

}

module.exports = dbConnection;