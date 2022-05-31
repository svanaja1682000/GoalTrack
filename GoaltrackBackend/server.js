const express=require("express");
const PORT=3000;
const app=express();
const goalRouter=require("./routes/goals");
const userRouter=require("./routes/users");
const goalSatusRouter=require("./routes/user_goals");
app.use("/goals",goalRouter);
app.use("/users",userRouter);
app.use("/goalStatus",goalSatusRouter);


app.listen(PORT,()=>{
console.log(" Goal tracking app is Up now");
});


