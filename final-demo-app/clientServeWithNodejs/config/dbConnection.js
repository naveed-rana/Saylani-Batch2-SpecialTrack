var mongoose = require('mongoose');

function dbConnection() {

    mongoose.connect('mongodb://test:test1214@ds259768.mlab.com:59768/specialtrack',
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