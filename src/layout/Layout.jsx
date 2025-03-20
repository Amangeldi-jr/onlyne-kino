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
            <Footer />
        </div>
    );
};

export default Layout;
