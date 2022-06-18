import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Usertype } from "./api";
import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';
import "./Signup.css";


const LoginSchema = Yup.object().shape({
  email: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required(' please Enter username'),
  password:Yup
  .string()
  .required("Please Enter your password")

});

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="main">
      <div className="sub-main">

      <Formik 
       initialValues={{
         email: '',
         password: '',

       }}
       validationSchema={LoginSchema}
       onSubmit={values => {
          console.log(values);
          const email=values.email;
         
            axios
              .post(
                "/login",
                {
                  email: values.email,
                  password: values.password,
                },
                {
                  "Content-Type": "application/json",
                }
              )
              .then(function (response) {
                console.log(response.data.jwt);
                localStorage.setItem("token", response.data.jwt);
                const token = response.data.jwt;
                console.log(`token:${localStorage.getItem("token")}`);
                if (response.data.jwt) {
                  const user = Usertype({ email, token });
                  user.then((response) => {
                    console.log(response.response);
                    localStorage.setItem("role", response.response);
                    localStorage.setItem("email", email);
                    navigate("/dashboard", {
                      state: {
                        role: response.response,
                        email: email,
                        token: token,
                      },
                    });
                  });
                }
              })

              .catch(() => {
                alert("wrong credentials");
                console.log("wrong credentials.");
              });
          }}
        
      >      
  
       {({ errors, touched }) => (
         <Form> 

        <div>
          <div className="imgs">
            <div className="container-iamges">
              <img src="/profile.png" alt="profile" className="profile" />
            </div>
          </div>

          <div>
            <h1>Login page</h1>
            <div>
        
              <Field  className="inputs"  placeholder="email" name="email" type="email" />
           {errors.email && touched.email ? <div>{errors.email}</div> : null}
              
            </div>
            <div className="second-input">
            
              <Field   className="inputs"  name="password" type="password"  placeholder="password"/>
           {errors.password && touched.password ? <div>{errors.password}</div> : null}
              
            </div>
            <div className="login-button">
              <button  className="buttons"
               
              >
                Login
              </button>
            </div>{" "}

          </div>


        </div>
        </Form>)}
      </Formik></div></div>
  );
};

export default Login;
