'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('user_goals', [{
      user_id:6,
      goal: "learn java",
      status:"In progress",
      month:"2022-06-1",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {user_id:7,
      goal: "learn c",
      status:"completed",
      month:"2022-06-1",
      createdAt: new Date(),
      updatedAt: new Date()},
    {user_id:8,
      goal: "learn react",
      status:"completed",
      month:"2022-06-1",
      createdAt: new Date(),
      updatedAt: new Date()},
    {user_id:9,
      goal: "learn sql",
      status:"In progress",
      month:"2022-06-1",
      createdAt: new Date(),
      updatedAt: new Date()}]);
    
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('user_goals', null, {});
   
  }
};
