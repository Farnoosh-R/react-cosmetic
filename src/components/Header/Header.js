import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  let title = '';
  let location = useLocation();

  switch (location.pathname) {
    case "/":
        title = "Home";
      break;

    case "/products":
      title = "Products";
      break;

    case "/aboutus":
        title = "About us";
     break;

     case "/contactus":
        title = "Contact us";
     break;

    default:
      break;
  }

  return (
    <div className="Header">
    <h2 className="mb-4">{title}</h2>
    </div>
  )
};
export default Header;
