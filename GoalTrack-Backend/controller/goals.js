const Goals=require("../models").goals
// Find all users
async function getallgoals(){
const goalss = await Goals.findAll();
console.log("All users:", JSON.stringify(goalss, null, 2));
return goalss;
}
module.exports = {getallgoals};