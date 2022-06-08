const express=require("express");
const router=express.Router();
const usersController=require("../controller/users");
const Users=require("../models").users
const bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
const { body, validationResult } = require('express-validator');
const {signupValidation} =require("../validation");


const jwtUtil = require("../security/jwtfile");
const { response } = require("express");
router.use(jwtUtil.checkToken);



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



router.get("/usertype/:email",jsonParser,async(req,res)=>{
  const email=req.params.email;
  console.log("inside Usertype route function ",`${email}`)
  
  try{
    const usertype=await usersController.userType({email});
    console.log(`${JSON.stringify(usertype,null,1)}`);
    res.json({response:`${usertype.role}`})
  }catch (err) {
    res.json({
      errorMessageinrouter: err.toString(),
    });
  }
})

router.get("/employees/:email",jsonParser,jwtUtil.isAdmin,async(req,res)=>{
  const email=req.params.email;
  console.log("inside Usertype route function ",`${email}`)
  
  try{
    const usertype=await usersController.getemployees({email});
    console.log(`${JSON.stringify(usertype,null,1)}`);
    res.json({response:`${JSON.stringify(usertype,null,1)}`})
  }catch (err) {
    res.json({
      errorMessageinrouter: err.toString(),
    });
  }
})
module.exports = router;