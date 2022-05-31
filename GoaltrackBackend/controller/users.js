const Users = require("../models").users

async function signupUser({
    userName,
    email,
    password,
    role,
    GDO,
}) {
  return Users.create({
    userName,
    email,
    password,
    role,
    GDO
  });
}

module.exports = { signupUser };
