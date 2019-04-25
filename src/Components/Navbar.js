import React from "react";
import "../assets/Navbar.css";
import { Navbar } from 'react-bootstrap';






class Navigation extends React.Component {
  render() {
    return (
      <React.Fragment>
          <Navbar className="navbar" >
              <h6 className="title">Rosies Bakes</h6>
              <div class="dropdown">
                <button class="dropbtn">Menu</button>
                <div class="dropdown-content">
                <a href="#" className="menufont">Price Menu</a>
                <a href="#" className="menufont">Contact</a>
                <a href="#" className="menufont">FAQ</a>
                </div>
            </div>
          </Navbar>  
      </React.Fragment>
    );
  }
}

export default Navigation;
