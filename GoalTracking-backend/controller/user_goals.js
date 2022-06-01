const User_goals = require("../models").user_goals

async function addGoalStatus({user_id,goal,status,month,}) {
  return User_goals.create({user_id,goal,status,month});
}

async function goalByMonth(month){
    return User_goals.findAll({
        where: {
          month: `${month}`
        } });
}
async function editGoal({goal,user_id,month}){
  console.log(`${user_id}`);
  try{
const text= await User_goals.findOne({where: {month:month,user_id:user_id }})
  
  if (!text) {
   return {message:"no record found"}
  }
  else{
  console.log(`retrieved record ${JSON.stringify(text,null,2)}`) 
  
  text.update({goal:goal}).then( updatedRecord => {
    console.log(`updated record ${JSON.stringify(updatedRecord,null,2)}`)
  return updatedRecord})

}}
catch(error) {

 return  error
}}

module.exports = { addGoalStatus,goalByMonth,editGoal};
