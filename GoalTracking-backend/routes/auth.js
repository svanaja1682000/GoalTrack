const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const jwt = require("jsonwebtoken");
const USers = require("../controller/users");
const { json } = require("body-parser");

router.post("/", jsonParser, async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log("inside the auth .js")

  const match = await USers.checkCredentials(email);
  console.log("users.findall result:",JSON.stringify(match,null,2));


  if (match.length == 0) {
    res.status(401).send({ message: " inside auth.js Wrong credentials" });
  } 
  else {
    const payload = {};
    console.log(`match[0]: ${JSON.stringify(match.rows)}`);
    const user = match[0];
    console.log(`user: ${JSON.stringify(user)}`);

    if (user.role == "employee") {
      payload.isEmployee=true;
      payload.isAdmin=false;
      payload.isSuperAdmin=false;
    } else if (user.role == "admin") {
        payload.isEmployee=false;
        payload.isAdmin=true;
        payload.isSuperAdmin=false;
    } else if (user.role=="superAdmin") {
        payload.isEmployee=false;
        payload.isAdmin=true;
        payload.isSuperAdmin=true;
    }
    console.log(`payload: ${JSON.stringify(payload)}`);
    const token = jwt.sign(payload, "secret123");
    res.json({ jwt: token });
  }
});

module.exports = router;

