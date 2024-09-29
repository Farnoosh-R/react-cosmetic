import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = ({children}) => {
    return(
        <div className="Layout">
        <Navbar />
        <div className="container py-5">
        {children}
        </div>
        <Footer />
        </div>
    )
}
export default Layout;