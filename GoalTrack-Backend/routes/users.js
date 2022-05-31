const express=require("express");
const router=express.Router();
const usersController=require("../controller/users");
const bodyParser = require("body-parser");
var jsonParser = bodyParser.json();

router.post("/", jsonParser, async (req, res) => {
  console.log(req.body);
  try {
    const newUser = await usersController.signupUser(req.body);
    res.json({
      message: `Created a new user with user_id ${newUser.id}`,
    });
  } catch (err) {
    res.json({
      error: err.toString(),
    });
  }
});

module.exports = router;