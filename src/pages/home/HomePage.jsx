import React from 'react';
import TrailersSection from "../../components/trailersSection/TrailersSection.jsx";
import PopularFilm from "../../components/popular/PopularFilm.jsx";
import PopularPerson from "../../components/popularPerson/PopularPerson.jsx";
import MoviePage from "../moviePage/MoviePage.jsx";

const HomePage = () => {
    return (
        <div>
            <MoviePage/>
            <TrailersSection/>
            <PopularFilm/>
            <PopularPerson/>
        </div>
    );
};

export default HomePage;