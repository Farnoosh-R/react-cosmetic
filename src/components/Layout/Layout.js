import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = ({children}) => {
    return(
        <div className="Layout">
        <Navbar />
        <div className="container py-5">
        <Header />
        {children}
        </div>
        <Footer />
        </div>
    )
}
export default Layout;