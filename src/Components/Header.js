import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";

import {Navbar} from 'react-bootstrap'
import { BrowserRouter as Router } from 'react-router-dom';

class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
      <Navbar expand="lg" variant="light" bg="danger" fixed="top">
        <MDBNavbarBrand>
          <strong className="white-text">Room Shuffle</strong>
        </MDBNavbarBrand>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2"><b>Rooms</b></span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="#room6">Room No.6</MDBDropdownItem>
                  <MDBDropdownItem href="#room7">Room No.7</MDBDropdownItem>
                  <MDBDropdownItem href="#room8">Room No.8</MDBDropdownItem>
                  <MDBDropdownItem href="#room9">Room No.9</MDBDropdownItem>
                  <MDBDropdownItem href="#room10">Room No.10</MDBDropdownItem>
                  <MDBDropdownItem href="#room11">Room No.11</MDBDropdownItem>
                  <MDBDropdownItem href="#room12">Room No.12</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBFormInline waves>
                <div className="md-form my-0">
                  <input className="form-control mr-sm-2" onChange={this.props.onsearch} type="text" placeholder="Search Your Name" aria-label="Search" />
                </div>
              </MDBFormInline>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </Navbar>
    </Router>
    );
  }
}

export default NavbarPage;