var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var UserModel = require("../models/usersSchema");


function passportSetup() {
  passport.use(
    new LocalStrategy({ usernameField: "email" }, function(
      email,
      password,
      done
    ) {
      UserModel.findOne({ email: email }, function(err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false, { message: "user not registered yet!" });
        }
        if (user.password != password) {
          return done(null, false, { message: "Incorrect password." });
        }
        return done(null, user);
      });
    })
  );

  passport.serializeUser(function(user, done) {
    done(null, user._id);
  });

  passport.deserializeUser(function(id, done) {
    UserModel.findById(id, function(err, user) {
      done(err, user);
    });
  });
}

module.exports = passportSetup;