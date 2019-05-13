'use strict';

const bcrypt = require('bcrypt-nodejs');

const { User } = require('../models');

module.exports = () => {

  const encryptPassword = password => {
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(password, salt)
  }

  const create = async (req, res) => {
    
    try {
    
      const userBody = { ...req.body };

      userBody.password = encryptPassword(userBody.password);

      const user = await User.create(userBody);
      console.log('teste')

      res.status(200).json(user)

    } catch(err) {
      res.status(400).json(err)
    }
  }

  return { create }
};