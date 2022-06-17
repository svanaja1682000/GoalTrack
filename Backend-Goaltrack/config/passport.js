const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const Users = require("../models").users;
const passport=require("passport")

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret123';

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
        console.log(jwt_payload)
       Users.findAll({ where: { email: jwt_payload.email } })
         .then(user => {
           if (user.length) {
             console.log("inside the passport")
             console.log(user)
            
             return done(null, user);
           }
        
           return done(null, false);
         })
        .catch(err => console.log(err));
    }
    )
  );
};