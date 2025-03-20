import React, { useState } from 'react';
import B from "../../assets/b.svg";
import { useGetAllMoviesQuery, useGetMovieCategoriesQuery } from "../../redux/api/kinApi.js";

const MoviePage = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const { data, isLoading } = useGetAllMoviesQuery({ category: null, language: "ru" });
    const { data: movies, error } = useGetMovieCategoriesQuery();

    const genreMapping = {
        28: "Боевики",
        12: "Приключения",
        35: "Комедии",
        878: "Фантастика",
        53: "Триллер",
        18: "Драма",
    };

    if (isLoading) {
        return <h2 className="text-center text-white text-2xl">Loading...</h2>;
    }
    if (error) return <p className="text-center text-red-500">Ошибка: {error.message}</p>;

    const filteredMovies = selectedCategory
        ? movies?.results.filter((movie) => movie.genre_ids.includes(selectedCategory))
        : movies?.results;

    return (
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
                    Сейчас в кино
                </h1>
                <img style={{ marginTop: "20px", marginLeft: "90px" }} src={B} />
                <div
                    style={{
                        display: "flex",
                        color: "#8f8f8d",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "25px",
                        marginLeft: "200px",
                        gap: 25,
                    }}
                >
                    {[{ id: null, name: "Все" },
                        { id: 28, name: "Боевики" },
                        { id: 12, name: "Приключения" },
                        { id: 35, name: "Комедии" },
                        { id: 878, name: "Фантастика" },
                        { id: 53, name: "Триллер" },
                        { id: 18, name: "Драма" }]
                        .map((category) => (
                            <h3
                                key={category.id}
                                style={{
                                    cursor: "pointer",
                                    color: selectedCategory === category.id ? "#fff" : "#8f8f8d",
                                    textDecoration: selectedCategory === category.id ? "underline" : "none",
                                }}
                                onClick={() => setSelectedCategory(category.id)}
                                onMouseOver={(e) => (e.target.style.color = "#fff")}
                                onMouseOut={(e) =>
                                    (e.target.style.color = selectedCategory === category.id ? "#fff" : "#8f8f8d")
                                }
                            >
                                {category.name}
                            </h3>
                        ))}
                </div>
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
                {filteredMovies?.map((movie) => (
                    <div key={movie.id} style={{ color: "white", position: "relative" }}>
                        <img
                            style={{ borderRadius: "10px", width: "100%" }}
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
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
                        <h3 style={{ marginTop: "10px" }}>{movie.title}</h3>
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
            <button
                style={{
                    marginTop: "20px",
                    padding: "10px 20px",
                    fontSize: "16px",
                    marginBottom: "10px",
                    borderRadius: "10px",
                    color: "white",
                    backgroundColor: "#1a1d29",
                    border: "1px solid white",
                }}
            >
                Все новинки
            </button>
        </div>
    );
};

export default MoviePage;
