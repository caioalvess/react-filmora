import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./header.css";

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/">Filmora</Link>
      </div>
    );
  }
}

export default Header;
