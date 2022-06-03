const express=require("express");
const router=express.Router();
const user_goalsController=require("../controller/user_goals");
const bodyParser = require("body-parser");
var jsonParser = bodyParser.json();

const jwtUtil = require("../security/jwtfile");
router.use(jwtUtil.checkToken);


router.post("/addgoalStatus", jwtUtil.isEmployee,jsonParser, async (req, res) => {
  console.log(req.body);
  try {
    const newGoalStatus = await user_goalsController. addGoalStatus(req.body);
    res.json({
      message: `Created a new goal,status for email ${newGoalStatus.email} ${newGoalStatus.goal} ${newGoalStatus.status}`,
    });
  } catch (err) {
    res.json({
      error: err.toString(),
    });
  }
});


router.get("/:email/:month", jwtUtil.isEmployee,async (req, res) => {
    try {
        const {email,month} = req.params;  
        console.log("email:`${email}`,month:`${month}`")
          
      const response = await  user_goalsController.goalByMonth({email,month});
      res.json(response);
    } catch (err) {
      res.json({
        error: err.toString(),
      });
    }
  });

  router.put("/editgoal", jsonParser, jwtUtil.isEmployee,async (req, res) => {
    const {email,month,goal}=req.query;
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


  router.put("/editstatus", jsonParser, jwtUtil.isEmployee,async (req, res) => {
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
  
  

module.exports = router;