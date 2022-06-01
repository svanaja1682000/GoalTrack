'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [{
      userName:'mammu',
      age: 21,
      skills:"python",
      email:"mammu123@gmail.com",
      password:"mammu",
      role:"superAdmin",
      GDO:"all",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      userName:'vanaja',
      age: 21,
      skills:"python",
      email:"vanu123@gmail.com",
      password:"vannu",
      role:"admin",
      GDO:"GDO1",
      createdAt: new Date(),
      updatedAt: new Date()
  
    },{
      
      userName:'thanu',
      age: 21,
      skills:"python",
      email:"thanu123@gmail.com",
      password:"thanu",
      role:"admin",
      GDO:"GDO2",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      userName:'niru',
      age: 21,
      skills:"python",
      email:"niru123@gmail.com",
      password:"niru",
      role:"admin",
      GDO:"GDO3",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      userName:'aishu',
      age: 21,
      skills:"python",
      email:"aishu123@gmail.com",
      password:"aishu",
      role:"admin",
      GDO:"GDO4",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {userName:'bindu',
    age: 21,
    skills:"python",
    email:"bindu123@gmail.com",
    password:"bindu",
    role:"employee",
    GDO:"GDO1",
    createdAt: new Date(),
    updatedAt: new Date()
  },
    {
    userName:'nandu',
    age: 21,
    skills:"python",
    email:"nandu123@gmail.com",
    password:"nandu",
    role:"employee",
    GDO:"GDO2",
    createdAt: new Date(),
    updatedAt: new Date()
  },
    {
    userName:'usha',
    age: 21,
    skills:"python",
    email:"usha123@gmail.com",
    password:"usha",
    role:"employee",
    GDO:"GDO3",
    createdAt: new Date(),
    updatedAt: new Date()
  },
    {
    userName:'teju',
    age: 21,
    skills:"python",
    email:"teju123@gmail.com",
    password:"teju",
    role:"employee",
    GDO:"GDO4",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
