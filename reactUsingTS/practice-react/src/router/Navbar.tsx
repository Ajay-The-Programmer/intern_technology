import React from "react";
import { NavLink} from "react-router-dom";
function Navbar() {
  return (
    <div className="Navbar">
      <nav>
        <div className="nav-wrapper" style={{ background: "#6200ee" }}>
          <a href="#" className="brand-logo m-5">
            ReactRouter
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
