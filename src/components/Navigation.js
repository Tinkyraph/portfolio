import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="navigation">
          <ul>
            <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
            <li>Home</li>
            </NavLink>
           
            <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
            <li>About</li>
            </NavLink>

            <NavLink to="/work" className={(nav) => (nav.isActive ? "nav-active" : "")}>
            <li>Work</li>
            </NavLink>

            <NavLink to="/art" className={(nav) => (nav.isActive ? "nav-active" : "")}>
            <li>Art</li>
            </NavLink>
          </ul>
        </nav>
    );
};
           

export default Navigation;

         