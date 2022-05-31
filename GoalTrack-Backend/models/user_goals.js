'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_goals extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user_goals.init({
    user_id: DataTypes.INTEGER,
    goal_id:DataTypes.INTEGER,
    status:DataTypes.STRING,
    month:DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'user_goals',
  });
  return user_goals;
};