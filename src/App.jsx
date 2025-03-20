import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import RegisterPage from "./pages/RegisterPage";
import AfishaPage from "./components/afisha/AfishaPage.jsx";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/premieres" element={<AfishaPage />} />
            </Routes>
        </Router>
    );
};

export default App;
