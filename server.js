'use strict';

require('dotenv').config({
  path: process.env.NODE_ENV == 'test' ? './../.env.test' : './../.env.developer'
});

const app = require('./src/app');
const PORT = process.env.PORT || 4000;

app.listen(PORT, err => {
  return err ? console.log(err) : console.log(`Backend rodando em: http://127.0.0.1:${PORT}`); 
});