
import { useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import '../components/CSS/Navbar.css'

function Navbar(props: any) {
  // setTimeout(()=>{
  //   props.history.push("/")
  // },5000)

  const selector = useSelector((state: any) => {
    return state.totalQuantity
  })
  return (
    <div className="Navbar" >
      <nav className="navbar" id="navbar">
        <Link to="/"> <h4 className="center">A-Shopping</h4></Link>
        <form className="form-inline">
          <Link to="/" className="navbar-brand" id="home"><i className="bi bi-house-fill"></i>Home</Link>
          <Link to="/cart" className="navbar-brand" id="home"><i className="bi bi-cart4"></i>Cart <i className="cart_total"> ({selector})</i></Link>
        </form>
      </nav>
    </div >
  );
}

export default withRouter(Navbar);
