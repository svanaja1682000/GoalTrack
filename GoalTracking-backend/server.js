const express=require("express");
const PORT=3000;
const app=express();
const signupRouter=require("./routes/signup");
const userRouter=require("./routes/users");
const authRouter=require("./routes/auth");
const usergoalsRouter=require("./routes/user_goals");


app.use("/signup",signupRouter);
app.use("/login",authRouter);
app.use("/users",userRouter);
app.use("/usergoals",usergoalsRouter);




app.listen(PORT,()=>{
console.log(" Goal tracking app is Up now");
});


