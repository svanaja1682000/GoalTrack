import React, { useEffect } from "react";
import { Nav } from "react-bootstrap";
//import { useNavigate } from "react-router-dom";
//import { connect } from "react-redux";
//import { logout } from "../../redux/actions";

const Header = () => {
  //const navigate = useNavigate();

  //   useEffect(() => {
  //     if (!token) {
  //       navigate("/login");
  //     }
  //   }, []);

  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => {
        console.log(`selected ${selectedKey}`);
        switch (selectedKey) {
          case "home":
            break;

          case "login":
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
        <Nav.Link>Logout</Nav.Link>
      </Nav.Item>
      {/* {user.username && <span> Welcome {user.username}!</span>} */}
    </Nav>
  );
};

export default Header;
