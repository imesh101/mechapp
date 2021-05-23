import React, { Component } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";

class Navbar extends Component {
  state = { menuCliked: false };
  handleClick = () => {
    this.setState({ menuCliked: !this.state.menuCliked });
  };
  render() {
    return (
      <nav className="navbar-items">
        <h1 className="navbar-logo">
          <img src={Logo} /> MECHAPP
        </h1>
        <div className="menu-icon">
          <i
            onClick={this.handleClick}
            className={this.state.menuCliked ? "fa fa-times" : "fa fa-bars"}
          ></i>
        </div>
        <div
          className={
            this.state.menuCliked ? "navbar-menu active" : "navbar-menu"
          }
        >
          <div className="navbar-link-container">
            <NavLink to="/" className="navbar-links">
              Services
            </NavLink>
          </div>
          <div className="navbar-link-container">
            <NavLink to="/" className="navbar-links">
              About Us
            </NavLink>
          </div>
          <div className="navbar-link-container">
            <NavLink to="/" className="navbar-link">
              <i className="fa fa-user-circle" aria-hidden="true"></i>
              {this.props.account}
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
