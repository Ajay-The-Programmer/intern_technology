import React from "react";
import { NavLink } from "react-router-dom";

const Navbar=() => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">Shopping Cart</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">


                    <NavLink className="waves-effect waves-light btn-large" to="/"><i className="material-icons left">Shop</i>button</NavLink>
                    <NavLink className="waves-effect waves-light btn-large" to="/carts"><i className="material-icons right">My Cart</i>button</NavLink>

                    <li><a href="collapsible.html">
                    </a></li>
                </ul>
            </div>
        </nav>
    )

}   
export default Navbar;