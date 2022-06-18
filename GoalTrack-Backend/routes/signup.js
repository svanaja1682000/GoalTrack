const express=require("express");
const router=express.Router();
const usersController=require("../controller/users");
const bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
const { body, validationResult } = require('express-validator');
const {signupValidation} =require("../validation");


router.post("/", jsonParser, signupValidation, async (req, res) => {
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
    } else {
    try {
      const newUser = await usersController.signupUser(req.body);
      res.json(newUser);
    } catch (err) {
      res.json({
        errorMessageinrouter: err.toString(),
      });
    }
  }});

  module.exports = router;