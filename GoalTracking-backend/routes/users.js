const express=require("express");
const router=express.Router();
const usersController=require("../controller/users");
const bodyParser = require("body-parser");
var jsonParser = bodyParser.json();

router.post("/", jsonParser, async (req, res) => {
  console.log(req.body);
  try {
    const newUser = await usersController.signupUser(req.body);
    res.json({
      message: `Created a new user with user_id ${newUser.id}`,
    });
  } catch (err) {
    res.json({
      errorMessageinrouter: err.toString(),
    });
  }
});
router.get("/Employees/:GDO",jsonParser,async(req,res)=>{
  
  try{
    const employees=await usersController.getemployees();
    res.json({employees:`${JSON.stringify(employees,null,2)}`})
  }catch (err) {
    res.json({
      errorMessageinrouter: err.toString(),
    });
  }
})

module.exports = router;