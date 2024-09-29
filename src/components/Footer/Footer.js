import React, { useContext } from "react";
import './style.css'
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";
import { FaSquareWhatsapp } from "react-icons/fa6";
import ContexTheme from "../Context/ContexTheme";

const Footer = () => {

    const themeContextValue = useContext(ContexTheme);

    return(
        <div className="Footer text-center">
        <div className="container">
        <div className="row justify-content-center">
        <div className="col-md-auto">
        <a href="#" style={{color: themeContextValue.theme.color}}>Products</a>
        </div>
        <div className="col-md-auto">
        <a href="#" style={{color: themeContextValue.theme.color}}>About us</a>
        </div>
        <div className="col-md-auto">
        <a href="#" style={{color: themeContextValue.theme.color}}>Contact us</a>
        </div>
        </div>
        <div className="social-sec mt-5 mb-2">
        <a className="icon" href="#"><AiFillInstagram style={{color: themeContextValue.theme.color}}/></a>
        <a className="icon" href="#"><IoLogoLinkedin style={{color: themeContextValue.theme.color}}/></a>
        <a className="icon" href="#"><FaSquareWhatsapp style={{color: themeContextValue.theme.color}}/></a>
        </div>
        <span style={{color: themeContextValue.theme.color}}>Development By Farnoosh</span>
        </div>
        </div>
    )
}
export default Footer;