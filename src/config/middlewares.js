'use strict';

const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const morgan = require('morgan');

module.exports = app => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cors());
    app.use(morgan("dev"))
    // use passport session
    //app.use(passport.initialize());
    //app.use(passport.session());
}