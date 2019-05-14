
const bcrypt = require('bcrypt-nodejs');

module.exports = ( sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.VIRTUAL,
    password_hash: DataTypes.STRING,
  },
  {
    hooks: {
      beforeSave: async user => {
        const salt = bcrypt.genSaltSync(10)
        
        if (user.password) {
          user.password_hash = bcrypt.hashSync(user.password, salt);
        }
      }
    }
  }
  );

  User.prototype.checkPassword = function(password) {
    return bcrypt.compare(password, this.password_hash)
  }

  return User;
}