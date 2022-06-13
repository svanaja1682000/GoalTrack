import React from "react";
import { Nav,Navbar,Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
    <Navbar.Brand>
        <img
          alt=""
          src="/logo.jpg"
          width="50"
          height="30"
          className="d-inline-block align-top"
        />{' '}
     WAL Employee Goal Tracking  
      </Navbar.Brand>
    <Nav 
      activeKey="/home"
      onSelect={(selectedKey) => {
        console.log(`selected ${selectedKey}`);
        switch (selectedKey) {
          case "home":
            navigate("/")
            break;
          case "login":
            if(localStorage.getItem('token')==null){
            navigate("/Login")}
            else{
              alert("You are already logged in ")
            }
            break;
          case "dashboard":
            if(localStorage.getItem('token')==null){
            navigate("/Login")}
            else{
              navigate("/dashboard")
            }
            
            break;
          case "signup":
            navigate("/signup")
            break;
          case "logout":
            console.log(localStorage.getItem('token'))
            localStorage.removeItem('token');
            console.log(localStorage.getItem('token'))
            navigate("/")

          break;

          default:
            break;
        }
      }}
    >
      <Nav.Item>
        <Nav.Link eventKey="home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="login">login</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="signup">Signup</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="dashboard">Dashboard</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="logout">Logout</Nav.Link>
      </Nav.Item>
    </Nav>
    </Container>
  </Navbar>
  );
};

export default Header;
