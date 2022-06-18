const Users = require("../models").users;
const Gdo=require("../models").gdos;
const Role=require("../models").roles;
const { Op } = require("sequelize");
const bcrypt=require("bcrypt");
const saltRounds=10

Role.belongsTo(Users,{targetKey:"roleid",foreignKey:"id"});
Gdo.belongsTo(Users,{targetKey:"gdoid",foreignKey:"id"});




async function userType({ email }) {
  try {
    const response = await 
    Role.findOne({
      attributes:[['rolename','rolename']],
      include:{
        model:Users,
        where: { email: email },
        required:true
      }
     
    });

    return response;
  } catch (error) {
    return { message: error.message };
  }
}



async function signupUser({
  username,
  age,
  skills,
  email,
  password,
  roleid,
  gdoid,
}) {
  try {
    if (roleid == 2 || roleid == 3) {
      const findExisted = await Users.findOne({
        where: { gdoid: gdoid },
      });
      if (findExisted !== null) {
        return {
          message: "Admin/super admin for this gdo has already assigned",
        };
      }
    } else {
      await Users.create({ username, age, skills, email, password, roleid, gdoid });
      return "created";
    }
  } catch (error) {
    return { message: error };
  }
}

async function getemployees({ email }) {
  try {
    const findExisted = await Users.findOne({
      attributes: [["gdoid", "gdoid"]],
      where: { email: email },
    });
    console.log(`${JSON.stringify(findExisted, null, 2)}`);
    const gdo = findExisted.gdoid;
    console.log("gdo", `${gdo}`);
    if (findExisted) {
      return Users.findAll({
        attributes: [
          ["username", "username"],
          ["email", "email"],
        ],
        where: { gdoid: gdo, roleid: 1},
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









async function usersByrole({ roleid }) {
  try {
    return Users.findAll({
      where: { roleid: roleid },
    });
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
