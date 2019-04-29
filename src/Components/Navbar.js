import React from "react";
import "../assets/Navbar.css";
import { Navbar } from 'react-bootstrap';
import {Route,  Link } from 'react-router-dom';
import Booking from '../Components/Booking';


class Navigation extends React.Component {
  render() {
    
    return (
      <React.Fragment>
          <Navbar className="navbar" >
              <Link to='/'className="title">Rosies Bakes</Link>
              <div class="dropdown">
                <button class="dropbtn">Menu</button>
                <div class="dropdown-content">
                <Link to='/Booking' className="menufont">Price Menu</Link>
                <Link to='/Booking' className="menufont">Contact</Link>
                <Link to='/Booking' className="menufont">Book</Link>
                </div>
            </div>
          </Navbar>  
          <Route path="/Booking" component={Booking} />

      </React.Fragment>
    );
  }
}

export default Navigation;
