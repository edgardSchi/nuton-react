import React, { Component } from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import logo from "./logo.png";
import Colors from "./Colors";
import { Link } from "react-router-dom";
import "./index.css";

const fontColor = Colors.fontColor;
const redColor = Colors.red;

const navbarStyle = {
  background: "#2c3e50",
  color: fontColor,
  borderBottom: "solid #292929"
};

const navStyle = {
  background: "#2c3e50",
  color: fontColor,
  fontSize: "20px",
  marginRight: "10px",
  textDecoration: "none"
};

const brandStyle = {
  fontSize: "35px",
  color: fontColor
};

class Topbar extends Component {
  render() {
    return (
      <Navbar style={navbarStyle} expand="lg" variant="dark">
        <Navbar.Brand style={brandStyle} href="/">
          <img
            alt=""
            src={logo}
            widht="50"
            height="50"
            className="d-inline-block align-top"
          />
          {"Nuton"}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="ml-auto">
          <Nav className="ml-auto text-right">
            <Link to="/" className="link">
              Home
            </Link>
            <Link to="/download" className="link">
              Download
            </Link>
            <Link to="/docs" className="link">
              Docs
            </Link>
            <a target="_blank" href="https://github.com/edgardSchi/nuton" className="link">GitHub</a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Topbar;
