const User_goals = require("../models").user_goals

async function addGoalStatus({
    user_id,
    goal_id,
    status,
    month,
}) {
  return User_goals.create({
    user_id,
    goal_id,
    status,
    month:"2022-05-31"
  });
}

async function goalByMonth(month){
    return User_goals.findAll({
        where: {
          month: `${month}`
        } });
}
module.exports = { addGoalStatus,goalByMonth};
