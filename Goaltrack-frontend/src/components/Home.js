import React from "react";
import { Carousel } from "react-bootstrap";
import "./Signup.css"
const Home=()=>{
    return(
        <div>
            <h1 className="home">
                Welcome to Employee  
                Goaltracking App
            </h1>
            <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100 "
      src="/home.png"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="/setgoal.jpg"
      alt="Second slide"
    />
  </Carousel.Item>
  </Carousel>
        </div>
    )
}
export default Home;