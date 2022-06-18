'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [{
      username:'mammu',
      age: 21,
      skills:"python",
      email:"mammu123@gmail.com",
      password:"mammu",
      roleid:"3",
      gdoid:5,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username:'vanaja',
      age: 21,
      skills:"python",
      email:"vanu123@gmail.com",
      password:"vannu",
      roleid:2,
      gdoid:1,
      createdAt: new Date(),
      updatedAt: new Date()
  
    },{
      
      username:'thanu',
      age: 21,
      skills:"python",
      email:"thanu123@gmail.com",
      password:"thanu",
      roleid:2,
      gdoid:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username:'niru',
      age: 21,
      skills:"python",
      email:"niru123@gmail.com",
      password:"niru",
      roleid:2,
      gdoid:3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username:'aishu',
      age: 21,
      skills:"python",
      email:"aishu123@gmail.com",
      password:"aishu",
      roleid:2,
      gdoid:4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {username:'bindu',
    age: 21,
    skills:"python",
    email:"bindu123@gmail.com",
    password:"bindu",
    roleid:1,
    gdoid:1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
    {
    username:'nandu',
    age: 21,
    skills:"python",
    email:"nandu123@gmail.com",
    password:"nandu",
    roleid:1,
    gdoid:2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
    {
    username:'usha',
    age: 21,
    skills:"python",
    email:"usha123@gmail.com",
    password:"usha",
    roleid:1,
    gdoid:3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
    {
    username:'teju',
    age: 21,
    skills:"python",
    email:"teju123@gmail.com",
    password:"teju",
    roleid:1,
    gdoid:4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};