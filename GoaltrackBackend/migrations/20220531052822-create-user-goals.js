'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user_goals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'users',
           
          },
          key: 'id'
        },
        allowNull: false
      },
      goal_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'goals',
           
          },
          key: 'id'
        },
        allowNull: false
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      month: {
        allowNull: false,
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('user_goals');
  }
};