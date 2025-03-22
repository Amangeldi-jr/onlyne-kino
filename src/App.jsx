import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import RegisterPage from "./pages/RegisterPage";
import AfishaPage from "./components/afisha/AfishaPage.jsx";
import SearchResults from "./components/SearchResults.jsx";
import LoginPage from "./pages/LoginPage";
import Collections from "./components/collection/Collections.jsx";
import Movie from "./components/movies/Movie.jsx";
import Actors from "./components/actors/Actors.jsx";

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/premieres" element={<AfishaPage />} />
                <Route path="/movies" element={<Movie />} />
                <Route path="/collections" element={<Collections />} />
                <Route path="/actors" element={<Actors />} />
                <Route path="/SearchResults" element={<SearchResults />} />
                <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
            </Routes>
        </Router>
    );
};

export default App;
