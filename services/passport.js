const passport = require("passport");
const User = require("../models/user");
const config = require("../config");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const LocalStrategy = require("passport-local");

// Create local Strategy
const localOptions={usernameField: 'email'};
const localStrategy = new LocalStrategy(localOptions, function(email, password, done){

    // Find user with email
    User.findOne({email: email},
        function(err, user) {
          if (err) {
            return done(err, false);
          }
    
          if (!user) {
            return  done(null, false);
          } 
        });
    //Compare hashed password
    
})

//Setup options for JWT Strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  secretOrKey: config.secret
};

//Create JWT Strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
  User.findById(payload.sub,
    function(err, user) {
      if (err) {
        return done(err, false);
      }

      if (user) {
       return  done(null, user);
      } else {
      return  done(null, false);
      }
    });
});

// Tell Passport to use it
passport.use(jwtLogin);
