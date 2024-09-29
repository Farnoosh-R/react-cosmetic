import React, { useContext } from "react";
import './style.css'
import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import ContexTheme from "../Context/ContexTheme";


const Navbar = () => {

const themeContextValue = useContext(ContexTheme);

return(
    <div className="Navbar">
    <nav className="navbar navbar-expand-lg bg-body-tertiary px-4">
  <div className="container-fluid">
    
    <img className="logo" src="/logo.png" alt="My Image" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/products">Products</Link>
      </li>
        <li className="nav-item">
          <Link className="nav-link" to="/aboutus">About us</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/contactus">Contact us</Link>
      </li>
      <li className="nav-item align-content-md-center theme-color">
      <span style={{color: themeContextValue.theme.color}}>0</span>
      <BsFillCartFill style={{color: themeContextValue.theme.color}} />
    </li>
      </ul>
      <div className="nav-palet">
      <button onClick={() => themeContextValue.setActiveTheme('purple')} className="palet-box" style={{backgroundColor: '#d1bdff'}}></button>
      <button onClick={() => themeContextValue.setActiveTheme('lighBlue')} className="palet-box" style={{backgroundColor: '#9ac2ce'}}></button>
      <button onClick={() => themeContextValue.setActiveTheme('green')} className="palet-box" style={{backgroundColor: '#90cf98'}}></button>
      <button onClick={() => themeContextValue.setActiveTheme('orange')} className="palet-box" style={{backgroundColor: '#fcae7c'}}></button>
      <button onClick={() => themeContextValue.setActiveTheme('red')} className="palet-box" style={{backgroundColor: '#fa9189'}}></button>
      </div>
    </div>
  </div>
</nav>
    </div>
)
}
export default Navbar;