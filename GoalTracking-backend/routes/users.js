const express=require("express");
const router=express.Router();
const usersController=require("../controller/users");
const Users=require("../models").users
const bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
const { body, validationResult } = require('express-validator');
const {signupValidation} =require("../validation");


const jwtUtil = require("../security/jwtfile");
router.use(jwtUtil.checkToken);

router.post("/", jsonParser, signupValidation, async (req, res) => {
  console.log(req.body);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
  } else {
  try {
    const newUser = await usersController.signupUser(req.body);
    res.json({
      message:newUser,
    });
  } catch (err) {
    res.json({
      errorMessageinrouter: err.toString(),
    });
  }
}});

router.get("/:role",jsonParser,jwtUtil.isSuperAdmin,async(req,res)=>{
  const role=req.params.role;
  console.log("inside role admin route function ",`${role}`)
  
  try{
    const Usersbyrole=await usersController.usersByrole({role});
    console.log(`${Usersbyrole}`);
    res.json({response:`${JSON.stringify(Usersbyrole,null,2)} are belongs to ${role}`})
  }catch (err) {
    res.json({
      errorMessageinrouter: err.toString(),
    });
  }
})

module.exports = router;