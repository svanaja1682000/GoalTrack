const User_goals = require("../models").user_goals

async function goalByMonth({email,month}){
    return User_goals.findAll({
      attributes: [
        ['email','email_id'],['goal','goal_name'],['status','status'],['month','month']]
     ,
        where: {month:month,email:email} 
      });
}

module.exports = {goalByMonth};
