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



router.get("/data/:email",jsonParser,jwtUtil.isEmployee,async(req,res)=>{
  const email=req.params.email;
  console.log("inside role admin route function ",`${email}`)
  
  try{
    const response=await usersController.getdata({email});
    console.log(`${response}`);
    res.json({response:response})
  }catch (err) {
    res.json({
      errorMessageinrouter: err.toString(),
    });
  }
})





router.get("/:role",jsonParser,jwtUtil.isSuperAdmin,async(req,res)=>{
  const role=req.params.role;
  console.log("inside role admin route function ",`${role}`)
  
  try{
    const Usersbyrole=await usersController.usersByrole({role});
    console.log(`${Usersbyrole}`);
    res.json({employe:Usersbyrole})
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
    res.json({employe:usertype})
  }catch (err) {
    res.json({
      errorMessageinrouter: err.toString(),
    });
  }
})
module.exports = router;