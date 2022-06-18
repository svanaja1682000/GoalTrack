'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('roles', [{
      rolename:"employee",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {rolename:"admin",
      createdAt: new Date(),
      updatedAt: new Date()},
    {rolename:"superAdmin",
      createdAt: new Date(),
      updatedAt: new Date()}]);
    

  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('roles', null, {});
  }
};
