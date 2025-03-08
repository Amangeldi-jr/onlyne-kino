import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Layout from "./layout/Layout.jsx";

const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        {/*<Route path="/about" element={<About/>}/>*/}
                        {/*<Route path="*" element={<NotFound/>}/>*/}
                    </Route>
                </Routes>
            </Router>
        </div>
    );
};

export default App;