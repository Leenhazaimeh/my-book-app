import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import LogoutButton from './components/LogoutButton';
import LoginButton from './components/LoginButton';
import './header.css';
import { withAuth0 } from "@auth0/auth0-react";

class Header extends React.Component {
  render() {
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
		  {/* <LogoutButton/> */}
		  {this.props.auth0.isAuthenticated ? <LogoutButton/> : <LogoutButton/>}
          {/* TODO: if the user is logged in, render the `LogoutButton` - if the user is logged out, render the `LoginButton` */}
      </Navbar>
    )
  }
}

export default withAuth0(Header);
