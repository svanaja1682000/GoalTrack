'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('user_goals', [{
      email:"bindu123@gmail.com",
      goal: "learn java",
      status:"In progress",
      month:"2022-06-1",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {email:"nandu123@gmail.com",
      goal: "learn c",
      status:"completed",
      month:"2022-06-1",
      createdAt: new Date(),
      updatedAt: new Date()},
    {email:"usha123@gmail.com",
      goal: "learn react",
      status:"completed",
      month:"2022-06-1",
      createdAt: new Date(),
      updatedAt: new Date()},
    {email:"teju123@gmail.com",
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
