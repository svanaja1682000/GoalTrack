const Users = require("../models").users

async function signupUser({userName,age,skills,email,password,role,GDO,}) {

  // const verify=Users.findAll({
  //   where: {
  //     emial: `${email}`
  //   } });
  
  return Users.create({
    userName,
    age,
    skills,
    email,
    password,
    role,
    GDO,
  });
}



async function checkCredentials(email){
  try{
      const verify= Users.findAll({
          where:{
            email:`${email}`
          }
        });
        console.log(JSON.stringify(verify,null,2));
        return verify

    }catch(err){
      console.log("in side the users file",err);
    }}


module.exports = { signupUser,checkCredentials };
