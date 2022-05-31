const express=require("express");
const router=express.Router();
const user_goalsController=require("../controller/user_goals");
const bodyParser = require("body-parser");
var jsonParser = bodyParser.json();

router.post("/", jsonParser, async (req, res) => {
  console.log(req.body);
  try {
    const newGoalStatus = await user_goalsController. addGoalStatus(req.body);
    res.json({
      message: `Created a new goal,status for user_id ${newGoalStatus.goal_id} ${newGoalStatus.status} ${newGoalStatus.id}`,
    });
  } catch (err) {
    res.json({
      error: err.toString(),
    });
  }
});


router.get("/:month", async (req, res) => {
    try {
        const month = req.params.month;  
        console.log(`month:${month}`)    
      const response = await  user_goalsController.goalByMonth(month);
      res.json(response);
    } catch (err) {
      res.json({
        error: err.toString(),
      });
    }
  });
  

module.exports = router;