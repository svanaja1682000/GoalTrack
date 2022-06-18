const express=require("express");
const router=express.Router();
const usersController=require("../controller/users");
const bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
const jwtUtil = require("../security/jwtfile");
const passport=require('passport');
//router.use(jwtUtil.checkToken);

// to get the type of user employee/admin/sadmin
router.get("/usertype",jsonParser,passport.authenticate('jwt',{session:false}),jwtUtil.isEmployee,async(req,res)=>{
  const email=req.user[0].dataValues.email;
  console.log("inside Usertype route function ",`${email}`)
  
  try{
    const usertype=await usersController.userType({email});
    console.log(`${JSON.stringify(usertype,null,1)}`);
    res.json({response:`${usertype.rolename}`})
  }catch (err) {
    res.json({
      errorMessageinrouter: err.toString(),
    });
  }
})



//to get details of the users
router.get("/data",jsonParser,passport.authenticate('jwt',{session:false}),jwtUtil.isEmployee,async(req,res)=>{
  const email=req.user[0].dataValues.email;

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

// get employees under admin

router.get("/employees",jsonParser,passport.authenticate('jwt',{session:false}),jwtUtil.isAdmin,async(req,res)=>{
  const email=req.user[0].dataValues.email;
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


//get employees under admin for superadmin operations

router.get("/empunderadmin/:email",jsonParser,passport.authenticate('jwt',{session:false}),jwtUtil.isSuperAdmin,async(req,res)=>{
  const email=req.params.email
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



router.get("/:roleid",jsonParser,passport.authenticate('jwt',{session:false}),jwtUtil.isSuperAdmin,async(req,res)=>{
  const roleid=req.params.roleid;
  console.log(req.user[0].dataValues.id,req.user[0].dataValues.email)
  console.log("inside role admin route function ",`${roleid}`)
  
  try{
    const Usersbyrole=await usersController.usersByrole({roleid});
    console.log(`${Usersbyrole}`);
    
    res.json({employe:Usersbyrole})
  }catch (err) {
    res.json({
      errorMessageinrouter: err.toString(),
    });
  }
})








router.get("/admindetails/:email",jsonParser,passport.authenticate('jwt',{session:false}),jwtUtil.isSuperAdmin,async(req,res)=>{
  const email=req.params.email;
  console.log("inside Usertype route function ",`${email}`)
  
  try{
    const usertype=await usersController.getadmindetails({email});
    console.log(`${JSON.stringify(usertype,null,1)}`);
    res.json({employe:usertype})
  }catch (err) {
    res.json({
      errorMessageinrouter: err.toString(),
    });
  }
})
module.exports = router;