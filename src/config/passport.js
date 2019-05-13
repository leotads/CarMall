'use strict';

const jwt = require('jwt-simple');
const passport = require('passport');
const passportJwt = require('passport-jwt');

const { Strategy, ExtractJwt } = passportJwt;

const { User } = require('../api/models');

module.exports = () => {
  const params = {
    secretOrKey: process.env.authSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
  }

  const strategyLocal = new Strategy(params, (payload, done) => {
    User.findOne({
        where: {id: payload.id},
        attributes: ['id', 'firstName', 'email']
      })
      .then(user => done(null, user ? { ...payload } : false))
      .catch(err => done(err, false))
  });
  
  passport.use(strategyLocal);
  
  return {
      authenticate: () => passport.authenticate('jwt', { session: false })
  }
}