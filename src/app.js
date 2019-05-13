'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

class AppController {
  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: true }));
    this.express.use(cors());
    this.express.use(morgan("dev"))
    this.express.use(express.json());
  }

  routes() {
    this.express.use(require('./routes'));
  }
}

module.exports = new AppController().express;