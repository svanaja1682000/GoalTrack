const User_goals = require("../models").user_goals;
const { sequelize } = require("../models");
const { Op } = require("sequelize");


async function goalByMonth({email,month}){
 
  return User_goals.findAll({
    attributes: [
      ['email','email_id'],['goal','goal_name'],['status','status'],['month','month']]
   ,
      where: {email:email,[Op.and]:[
        sequelize.fn('EXTRACT(MONTH from "month")=',month)]} 
    });
}

module.exports = {goalByMonth}