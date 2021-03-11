import React from "react";
import { NavLink, Link, withRouter } from "react-router-dom";
import '../components/CSS/Navbar.css'





function Navbar(props: any) {
  // setTimeout(()=>{
  //   props.history.push("/")
  // },5000)


  return (
    <div className="Navbar" >
      <nav className="navbar" id="navbar">
        <Link to="/" className="navbar-brand" id="home">Home</Link>
        <h4 className="center">Welcome to our shop</h4>
        <form className="form-inline">
        <Link to="/cart" className="navbar-brand" id="home">Cart</Link>
        </form>
      </nav>
    </div>
  );
}

export default withRouter(Navbar);
