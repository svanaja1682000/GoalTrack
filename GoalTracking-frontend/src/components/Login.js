import axios from "axios";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {Usertype} from "./api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [role,setRole]=useState("");
  const navigate = useNavigate();

  return (
    <Container>
      <Row>
        <Col>
          <div>
            <label htmlFor="email">Username</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div>
            <button
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
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
