'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('gdos', [{
      gdoname:"gdo1",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      gdoname:"gdo2",
      createdAt: new Date(),
      updatedAt: new Date()},

    {gdoname:"gdo3",
      createdAt: new Date(),
      updatedAt: new Date()},
      
      {gdoname:"gdo4",
      createdAt: new Date(),
      updatedAt: new Date()},
      
      
      {gdoname:"all",
      createdAt: new Date(),
      updatedAt: new Date()}
    
    
    
    ]);
    

  },
    async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('gdos', null, {});

}
}