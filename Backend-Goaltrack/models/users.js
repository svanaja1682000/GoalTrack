'use strict';
const {
  Model
} = require('sequelize');
const bcrypt=require('bcrypt')
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  users.init({
    username: DataTypes.STRING,
    age:DataTypes.INTEGER,
    skills:DataTypes.STRING,
    email: DataTypes.STRING,
    password:DataTypes.STRING,
    role:DataTypes.STRING,
    gdo:DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};