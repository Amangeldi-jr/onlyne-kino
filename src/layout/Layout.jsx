import React from 'react';
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <header className={"bg-black"}>H</header>
            <Outlet />
            <footer>F</footer>

        </div>
    );
};

export default Layout;