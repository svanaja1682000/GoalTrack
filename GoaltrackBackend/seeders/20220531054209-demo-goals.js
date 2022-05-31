'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('goals', [{
      goal_name:'Learnig',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      goal_name:'Communication',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      goal_name:'Teamwork',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      goal_name:'Innovation',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('goals', null, {});
  }
};
