import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
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
      <MDBNavbar color="default-color" dark expand="md">
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
                  <MDBDropdownItem href="#!">Room No.6</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Room No.7</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Room No.8</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Room No.9</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Room No.10</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Room No.11</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Room No.12</MDBDropdownItem>
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
      </MDBNavbar>
    </Router>
    );
  }
}

export default NavbarPage;