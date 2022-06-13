const { body,validationResult } = require('express-validator');
const Users=require("./models").users;

const signupValidation=[
    body('username').trim().isAlpha().withMessage("username must be stiring").isLength({min:6}).withMessage("Usr name must coantain more than 6 characters"),
    body('age').trim().isNumeric().withMessage("age should be number"),
    body('skills').trim().isAlpha().withMessage("skill name should be in string form "),
    body('email').trim().isEmail().withMessage("Enter a valid Email address").custom(async(value)=>{
        const response=await Users.findOne({where :{email:'email'}})
        console.log(`inside the signup validation ${JSON.stringify(response,null,2)}`)
        if(response!==null){
            return Promise.reject("Email already exist")
        }
    }),
    body('password').trim().isStrongPassword({minLength:8,minLowercase:1,minUppercase:1,minSymbols:1,minNumbers:1}).withMessage("Not a strong password try providing 1 upper, 1 lower, 1 num , 1 symbol characters"),
    body('role').trim().isAlpha().withMessage("Role must be  string"),
    
]

const LoginValidation=[
    body('email').trim().isEmail().withMessage("Enter a valid Email address").custom(async(value)=>{
        const response=await Users.findOne({where :{email:'email'}})
        console.log(`inside the signup validation ${JSON.stringify(response,null,2)}`)
        if(response!==null){
            return Promise.reject("Email already exist")
        }}),
        body('password').trim().isStrongPassword({minLength:8,minLowercase:1,minUppercase:1,minSymbols:1,minNumbers:1}).withMessage("Not a strong password try providing 1 upper, 1 lower, 1 num , 1 symbol characters"),
]
module.exports = {signupValidation,LoginValidation }