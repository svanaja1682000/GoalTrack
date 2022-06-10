import axios from "axios";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {Usertype} from "./api";
import "./Signup.css"


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [role,setRole]=useState("");
  const navigate = useNavigate();

  return (





    
    
        <div className="main">

        <div className="sub-main">
            <div>
              <div  className="imgs">
                  <div className="container-iamges">
                    <img src="/profile.png" alt="profile" className="profile"/>
                  </div>
                </div>
          
           
           
          <div>
            <h1>Login page</h1>
            <div>
            <img src="/email.png" alt="email" className="email"/>
            <input  className="inputs" type="email" name="email" id="name" placeholder="email"
              
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div  className="second-input">
          <img   src="/password.jpg" alt="password" className="email"/>
            <input
            className="inputs"
            placeholder="password" id ="name"
              type="password"
              name="password"
              
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          
          <div className="login-button">
            <button
            className="buttons"
              onClick={() => {
                console.log("Inside onClick of Login component");
                console.log(`email: ${email}`);

                axios
                  .post(
                    "/login",
                    {
                      email: email,
                      password: password,
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
                        localStorage.setItem("email",email);
                        navigate("/dashboard",{state:{role:response.response, email:email,token:token}});
                      });
                    }
                  })

                  .catch(() => {
                    alert("wrong credentials");
                    console.log("wrong credentials.");
                  });
              }}
              type="submit"
            >
              Login
            </button>
            </div> </div>
          </div>
        </div>
    </div>  
          
        
  );
};

export default Login;
