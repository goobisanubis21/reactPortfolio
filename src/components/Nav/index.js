import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import logo from "./mylogo.png";

function Nav() {
    return (
        <ul className="nav nav-tabs" id="navBar">
            <li className="nav-item">
                <Link to="/" >
                    <img id="logo" src={logo} alt="logo"/>
                </Link>
            </li>
            <li className="nav-item" title="Home Page">
                <Link to="/" >
                    Home
                </Link>
            </li>
            <li className="nav-item" title="Check out my projects">
                <Link to="/projects" >
                    Protfolio
                </Link>
            </li>
            <li className="nav-item" title="Questions? Feedback? Email me">
                <Link to="/contact" >
                    Contact Me
                </Link>
            </li>
        </ul>
    );
}

export default Nav;