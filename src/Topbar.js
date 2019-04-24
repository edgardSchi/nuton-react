import React, {Component} from 'react';
import {Navbar, NavDropdown, Nav} from 'react-bootstrap';
import logo from './logo.png'
import Colors from './Colors'

const fontColor = Colors.fontColor;
const redColor = Colors.red;

const navbarStyle = {
  background: '#2c3e50',
  color: fontColor
}

const navStyle = {
  float: 'right'
}

const brandStyle = {
  fontSize: '35px',
  color: fontColor
}

class Topbar extends Component {

    render() {
        return (
<Navbar style={navbarStyle} expand="lg" variant="dark">
  <Navbar.Brand style={brandStyle} href="#home">
          <img 
            alt=""
            src={logo}
            widht="50"
            height="50"
            className="d-inline-block align-top"
          />
          { 'Nuton' }
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav"/>
  <Navbar.Collapse id="basic-navbar-nav" className="ml-auto">
    <Nav className="ml-auto text-right">
      <Nav.Link href="/" style={navbarStyle}>Home</Nav.Link>
      <Nav.Link href="#link" style={navbarStyle}>Download</Nav.Link>
      <Nav.Link href="/" style={navbarStyle}>Docs</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

        );
    }
}

export default Topbar;