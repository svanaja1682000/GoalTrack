const express=require("express");
const router=express.Router();
const goalsController=require("../controller/goals");
router.get("/",async(req,res)=>{
    try{
        const goalss=await goalsController.getallgoals();
        res.json(goalss);

    }catch(err){
        res.json({error:err.toString(),})
    }
});
module.exports=router;