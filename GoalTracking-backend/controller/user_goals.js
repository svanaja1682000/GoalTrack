const User_goals = require("../models").user_goals

async function addGoalStatus({email,goal,status,month,}) {
  return User_goals.create({email,goal,status,month});
}

async function goalByMonth({email,month}){
    return User_goals.findAll({
      attributes: [
        ['email','email_id'],['goal','goal_name'],['status','status'],['month','month']]
     ,
        where: {month:month,email:email} 
      });
}



async function editGoal({email,month,goal,actualGoal}){
  console.log(`${goal}` ,`${actualGoal}`);
  try{
const text= await User_goals.findOne({where: {email:email,goal:goal,month:month}})
  
  if (!text) {
   return {message:"no record found"}
  }
  else{
  console.log(`retrieved record ${JSON.stringify(text,null,2)}`) 
  
  text.update({goal:actualGoal}).then( updatedRecord => {
    console.log(`updated record ${JSON.stringify(updatedRecord,null,2)}`)
  return updatedRecord})

}}
catch(error) {return  error
}}



async function editStatus({email,month,status,actualStatus}){
  console.log(`${status}` ,`${actualStatus}`);
  try{
const text= await User_goals.findOne({where: {email:email,status:status,month:month }})
  
  if (!text) {
   return {message:"no record found"}
  }
  else{
  console.log(`retrieved record ${JSON.stringify(text,null,2)}`) 
  
  text.update({status:actualStatus}).then( updatedRecord => {
    console.log(`updated record ${JSON.stringify(updatedRecord,null,2)}`)
  return updatedRecord})

}}
catch(error) {return  error
}}

module.exports = { addGoalStatus,goalByMonth,editGoal,editStatus};
