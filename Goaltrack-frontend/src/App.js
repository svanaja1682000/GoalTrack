import React from "react";
import { Container } from "react-bootstrap";
import { Route,Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import Employee from "./components/Employee";
import Admin from "./components/Admin";




function App() {
  return (
    <Container>
    <Header/>
    <div className="App">
   <Routes> 
   <Route path="/" element={<Home/>}></Route>
  <Route path="/login" element={<Login/>}></Route>
  <Route path="/dashboard" element={<Dashboard/>}></Route>  
  <Route path="/employee" element={<Employee/>}></Route>
  <Route path="/admin" element={<Admin/>}></Route>
  <Route path="/signup" element={<Signup/>}></Route> 
   </Routes>
 </div>
  <Footer/>
    </Container>
  );
}

export default App;
