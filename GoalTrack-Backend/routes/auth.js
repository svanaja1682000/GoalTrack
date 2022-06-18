const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const jwt = require("jsonwebtoken");
const Users = require("../controller/users");
const { body, validationResult } = require('express-validator');
const {LoginValidation} =require("../validation");
const passport = require("passport");
//const localStrategy=require(passport-local).Strategy;


router.post("/", jsonParser, async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log("inside the auth .js")

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
  } else {

  const match = await Users.checkCredentials({email,password});
  console.log("users.findall result:",JSON.stringify(match,null,2));


  if (match.length == 0) {
    res.status(401).send({ message: " inside auth.js Wrong credentials" });
  } 
  else {
    const payload = {};
    console.log(`match[0]: ${JSON.stringify(match[0])}`);
    const user = match[0];
    console.log(`user: ${JSON.stringify(user)}`);

    if (user.roleid ===1 ) {
      payload.isEmployee=true;
      payload.email=match[0].email
      payload.id=match[0].id
      payload.isAdmin=false;
      payload.isSuperAdmin=false;
    } else if (user.roleid === 2) {
        payload.isEmployee=true;
        payload.email=match[0].email
        payload.id=match[0].id
        payload.isAdmin=true;
        payload.isSuperAdmin=false;
    } else if (user.roleid===3) {
        payload.isEmployee=false;
        payload.email=match[0].email
        payload.id=match[0].id
        payload.isAdmin=true;
        payload.isSuperAdmin=true;
    }
    console.log(`payload: ${JSON.stringify(payload)}`);
    const token = jwt.sign(payload, "secret123");
    res.json({ jwt:token });
  }}
});

module.exports = router;

