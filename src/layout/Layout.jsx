import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import HomePage from "../pages/home/HomePage.jsx";

const Layout = () => {
    return (
        <div>
            <Header />
            <HomePage/>
            <Outlet />
<<<<<<< HEAD
            <Footer />
=======
            <footer>F</footer>

>>>>>>> 55d1594f55ea4fa1cd8e7f594554add3a58590f9
        </div>
    );
};

export default Layout;