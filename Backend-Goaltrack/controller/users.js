const Users = require("../models").users;
const { Op } = require("sequelize");
const jwt=require("jsonwebtoken");
const passport=require("passport");

async function signupUser({
  username,
  age,
  skills,
  email,
  password,
  role,
  gdo,
}) {
  try {
    if (role == "admin" || role == "superAdmin") {
      const findExisted = await Users.findOne({
        where: { gdo: gdo },
      });
      if (findExisted !== null) {
        return {
          message: "Admin/super admin for this gdo has already assigned",
        };
      }
    } else {
      await Users.create({ username, age, skills, email, password, role, gdo });
      return "created";
    }
  } catch (error) {
    return { message: error };
  }
}

async function getemployees({ email }) {
  try {
    const findExisted = await Users.findOne({
      attributes: [["gdo", "gdo"]],
      where: { email: email },
    });
    console.log(`${JSON.stringify(findExisted, null, 2)}`);
    const gdo = findExisted.gdo;
    console.log("gdo", `${gdo}`);
    if (findExisted) {
      return Users.findAll({
        attributes: [
          ["username", "username"],
          ["email", "email"],
        ],
        where: { gdo: gdo, role: "employee"},
      });
    } else {
      return {
        message: `There are no employees under admin ${email} `,
      };
    }
  } catch (error) {
    return { message: error.message };
  }
}









async function usersByrole({ role }) {
  try {
    return Users.findAll({
      where: { role: role },
    });
  } catch (error) {
    return { message: error.message };
  }
}

async function userType({ email }) {
  try {
    const response = await Users.findOne({
      attributes: [["role", "role"]],
      where: { email: email },
    });

    return response;
  } catch (error) {
    return { message: error.message };
  }
}

async function getdata({ email }) {
  try {
    const response = await Users.findAll({
      
      where: { email: email },
    });

    return response;
  } catch (error) {
    return { message: error.message };
  }
}


async function checkCredentials({ email, password }) {
  try {
    const verify = Users.findAll({
      where: {
        email: email,
        password: password,
      },
    });
    console.log(JSON.stringify(verify, null, 2));
    return verify;
  } catch (err) {
    console.log("in side the users file", err);
  }
}





async function getadmindetails({ email }) {
  try {
  
      return Users.findOne({
        attributes: [
          ["username", "username"],
          ["email", "email"],
        ],
        where: { email:email},
      });
    
  } catch (error) {
    return { message: error.message };
  }
}

module.exports = {
  signupUser,
  checkCredentials,
  getemployees,
  usersByrole,
  userType,
  getdata,
  getadmindetails
};
