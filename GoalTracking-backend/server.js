const express=require("express");
const PORT=3000;
const app=express();

const userRouter=require("./routes/users");
const goalSatusRouter=require("./routes/user_goals");
const authRouter=require("./routes/auth")

app.use("/users",userRouter);
app.use("/goalStatus",goalSatusRouter);

app.use("/login",authRouter);


app.listen(PORT,()=>{
console.log(" Goal tracking app is Up now");
});


