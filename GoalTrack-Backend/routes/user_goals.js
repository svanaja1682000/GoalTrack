const express=require("express");
const router=express.Router();
const user_goalsController=require("../controller/user_goals");
const bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
const passport=require('passport');
const jwtUtil = require("../security/jwtfile");
//router.use(jwtUtil.checkToken);


router.post("/addgoalStatus",passport.authenticate('jwt',{session:false}), jwtUtil.isAdmin,jsonParser, async (req, res) => {
 const {goal,status,month}=req.body
  const email=req.user[0].dataValues.email;
  console.log(email)
  try {
    const newGoalStatus = await user_goalsController. addGoalStatus({email,goal,status,month});
    res.json({
      message: `Created a new goal,status for email ${newGoalStatus.email} ${newGoalStatus.goal} ${newGoalStatus.status}`,
    });
  } catch (err) {
    res.json({
      error: err.toString(),
    });
  }
});

router.get("/",passport.authenticate('jwt',{session:false}), jwtUtil.isAdmin,async (req, res) => {
  try {
    const email=req.user[0].dataValues.email;
      console.log("email:`${email}`")
        
    const response = await  user_goalsController.goaldata({email});
    res.json({response:response});
  } catch (err) {
    res.json({
      error: err.toString(),
    });
  }
});



router.get("/:month", passport.authenticate('jwt',{session:false}),jwtUtil.isAdmin,async (req, res) => {
    try {
        const {month} = req.params;  
        const email=req.user[0].dataValues.email;
        console.log("email:`${email}`,month:`${month}`")
          
      const response = await  user_goalsController.goalByMonth({email,month});
      res.json({response:response});
    } catch (err) {
      res.json({
        error: err.toString(),
      });
    }
  });

  router.put("/editgoal", jsonParser, passport.authenticate('jwt',{session:false}),jwtUtil.isAdmin,async (req, res) => {
    const {month,goal}=req.query;
    const email=req.user[0].dataValues.email;
    const actualGoal=req.body.goal;
    console.log(`inside the user_goals.js mail ${email} month ${month} goal ${goal} `)
   
    try {
      const editingGoal = await user_goalsController.editGoal({email,month,goal,actualGoal});
      res.json({
        message: `Goal changed from  ${goal} to  ${actualGoal} `,
      });
    } catch (err) {
      res.json({
        errormessageinroutefile: err.toString(),
      });
    }
  });


  router.put("/editstatus", jsonParser,passport.authenticate('jwt',{session:false}),jwtUtil.isAdmin,async (req, res) => {
    const {email,month,status}=req.query;
    const actualStatus=req.body.status;
    console.log(`inside the user_goals.js mail ${email} month ${month} goal ${status} `)
   
    try {
      const editingStatus= await user_goalsController.editStatus({email,month,status,actualStatus});
      res.json({
        message: `Status changed from  ${status} to  ${actualStatus} `,
      });
    } catch (err) {
      res.json({
        errormessageinroutefile: err.toString(),
      });
    }
  });
  
  router.delete("/deletedata", jsonParser, jwtUtil.isAdmin,async (req, res) => {
    const {id}=req.query;
 
    console.log(`inside the user_goals.js id ${id}`)
   
    try {
      const deletedata= await user_goalsController.deletedata({id});
      res.json({
        message:"deleted row successfully"
      });
    } catch (err) {
      res.json({
        errormessageinroutefile: err.toString(),
      });
    }
  });
  

module.exports = router;