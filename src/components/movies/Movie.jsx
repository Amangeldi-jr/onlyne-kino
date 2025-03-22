import React, { useState, useEffect } from "react";
import { useGetAllMoviesQuery } from "../../redux/api/kinApi.js";
import Header from "../../layout/header/Header.jsx";
import Footer from "../../layout/footer/Footer.jsx";

const Movie = () => {
    const [selectedCategory, setSelectedCategory] = useState(null); // Категорияны тандоо
    const { data, isLoading, error } = useGetAllMoviesQuery({
        category: null,
        language: "ru",
    });

    const genreMapping = {
        28: "Боевики",
        12: "Приключения",
        35: "Комедии",
        878: "Фантастика",
        53: "Триллер",
        18: "Драма",
    };

    if (isLoading) {
        return <h2 className="text-center text-white text-2xl">Загрузка...</h2>;
    }
    if (error) return <p className="text-center text-red-500">Ошибка: {error.message}</p>;

    // Категорияга ылайык фильтрациялоо
    const filteredMovies = selectedCategory
        ? data?.results.filter((movie) => movie.genre_ids.includes(selectedCategory))
        : data?.results;

    return (
        <>
            <Header />
            <div
                style={{
                    width: "1920px",
                    margin: "auto",
                    paddingTop: "20px",
                    textAlign: "center",
                    backgroundColor: "#1a1d29",
                }}
            >
                <div style={{ display: "flex", marginLeft: "228px", textAlign: "center" }}>
                    <h1 style={{ marginTop: "20px", fontWeight: 900, fontSize: "45px", color: "white" }}>
                        Фильмы
                    </h1>
                </div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gap: "23px",
                        width: "1460px",
                        margin: "auto",
                        marginTop: "20px",
                    }}
                >
                    {/* Ensure this renders more than 20 movies */}
                    {filteredMovies?.slice(0, 50).map((movie) => (
                        <div key={movie.id} style={{ color: "white", position: "relative" }}>
                            <img
                                style={{ borderRadius: "10px", width: "100%" }}
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title || movie.name}
                            />
                            <div
                                style={{
                                    position: "absolute",
                                    top: "10px",
                                    left: "10px",
                                    backgroundColor: "green",
                                    color: "white",
                                    width: "62px",
                                    height: "33px",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderRadius: "5px",
                                    fontWeight: "bold",
                                }}
                            >
                                {movie.vote_average}
                            </div>
                            <h3 style={{ marginTop: "10px" }}>{movie.title || movie.name}</h3>
                            <div style={{ color: "yellow", marginTop: "10px" }}>
                                {movie.genre_ids.map(
                                    (genreId) =>
                                        genreMapping[genreId] && (
                                            <span key={genreId} style={{ marginRight: "10px" }}>
                                                {genreMapping[genreId]}
                                            </span>
                                        )
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Movie;
