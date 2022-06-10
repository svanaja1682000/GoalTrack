const express=require("express");
const router=express.Router();
const user_goalsController=require("../controller/admin");

const jwtUtil = require("../security/jwtfile");
router.use(jwtUtil.checkToken);


router.get("/:email/:month", jwtUtil.isAdmin,async (req, res) => {
    try {
        const {email,month} = req.params;  
        console.log("email:`${email}`,month:`${month}`")
          
      const response = await  user_goalsController.goalByMonth({email,month});
      res.json({response:response});
    } catch (err) {
      res.json({
        error: err.toString(),
      });
    }
  });


  module.exports = router;