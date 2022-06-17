'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [{
      username:'mammu',
      age: 21,
      skills:"python",
      email:"mammu123@gmail.com",
      password:"mammu",
      role:"superAdmin",
      gdo:"all",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username:'vanaja',
      age: 21,
      skills:"python",
      email:"vanu123@gmail.com",
      password:"vannu",
      role:"admin",
      gdo:"gdo1",
      createdAt: new Date(),
      updatedAt: new Date()
  
    },{
      
      username:'thanu',
      age: 21,
      skills:"python",
      email:"thanu123@gmail.com",
      password:"thanu",
      role:"admin",
      gdo:"gdo2",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username:'niru',
      age: 21,
      skills:"python",
      email:"niru123@gmail.com",
      password:"niru",
      role:"admin",
      gdo:"gdo3",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username:'aishu',
      age: 21,
      skills:"python",
      email:"aishu123@gmail.com",
      password:"aishu",
      role:"admin",
      gdo:"gdo4",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {username:'bindu',
    age: 21,
    skills:"python",
    email:"bindu123@gmail.com",
    password:"bindu",
    role:"employee",
    gdo:"gdo1",
    createdAt: new Date(),
    updatedAt: new Date()
  },
    {
    username:'nandu',
    age: 21,
    skills:"python",
    email:"nandu123@gmail.com",
    password:"nandu",
    role:"employee",
    gdo:"gdo2",
    createdAt: new Date(),
    updatedAt: new Date()
  },
    {
    username:'usha',
    age: 21,
    skills:"python",
    email:"usha123@gmail.com",
    password:"usha",
    role:"employee",
    gdo:"gdo3",
    createdAt: new Date(),
    updatedAt: new Date()
  },
    {
    username:'teju',
    age: 21,
    skills:"python",
    email:"teju123@gmail.com",
    password:"teju",
    role:"employee",
    gdo:"gdo4",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
