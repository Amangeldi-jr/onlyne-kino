import React, { useState } from "react";
import { useGetAllMoviesQuery } from "../../redux/api/kinApi.js";
import Header from "../../layout/header/Header.jsx";
import Footer from "../../layout/footer/Footer.jsx";

const Collections = () => {
    const [category, setCategory] = useState("");
    const [selectedGenre, setSelectedGenre] = useState("");

    const { data, isLoading, error } = useGetAllMoviesQuery({
        category: selectedGenre || category,
        type: category === "series" ? "tv" : "movie",
        year: "",
    });

    if (isLoading) return <p className="text-white text-center">Жүктөлүүдө...</p>;
    if (error) return <p className="text-red-500 text-center">Ката кетти!</p>;

    const buttons = [
        { name: "Kinoarea", category: "" },
        { name: "Жанры", category: "genres" },
    ];

    const genres = [
        { name: "Action", id: "28" },
        { name: "Drama", id: "18" },
        { name: "Comedy", id: "35" },
    ];

    return (
        <>
            <Header />
            <div
                style={{
                    width: "1920px",
                    margin: "0 auto",
                    backgroundColor: "#1a1d29",
                    color: "white",
                    paddingBottom: "50px",
                }}
            >
                <div style={{ marginLeft: "245px", paddingTop: "50px" }}>
                    <h1 style={{ fontWeight: 900, fontSize: "45px" }}>Подборки фильмов</h1>
                    <p
                        style={{
                            width: "951px",
                            fontWeight: 500,
                            fontSize: "18px",
                            marginTop: "30px",
                            marginBottom: "30px",
                        }}
                    >
                        Также как дальнейшее развитие различных форм деятельности...
                    </p>

                    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                        {buttons.map((btn, index) => (
                            <button
                                key={index}
                                onClick={() => setCategory(btn.category)}
                                style={{
                                    width: "120px",
                                    height: "40px",
                                    backgroundColor: category === btn.category ? "darkblue" : "blue",
                                    color: "white",
                                    border: "none",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                }}
                            >
                                {btn.name}
                            </button>
                        ))}
                    </div>

                    {category === "genres" && (
                        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "20px" }}>
                            {genres.map((genre) => (
                                <button
                                    key={genre.id}
                                    onClick={() => setSelectedGenre(genre.id)}
                                    style={{
                                        width: "120px",
                                        height: "40px",
                                        backgroundColor: selectedGenre === genre.id ? "darkblue" : "blue",
                                        color: "white",
                                        border: "none",
                                        borderRadius: "5px",
                                        cursor: "pointer",
                                    }}
                                >
                                    {genre.name}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                <div style={{ marginLeft: "245px", marginTop: "40px", width: "1440px" }}>
                    {data?.results?.slice(0, 30).map((movie) => (
                        <div
                            key={movie.id}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "20px",
                                marginBottom: "30px",
                                backgroundColor: "#252836",
                                padding: "15px",
                                borderRadius: "10px",
                            }}
                        >
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                                alt={movie.title || movie.name}
                                style={{
                                    width: "200px",
                                    height: "120px",
                                    borderRadius: "10px",
                                }}
                            />
                            <div style={{ flex: "1" }}>
                                <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>
                                    {movie.title || movie.name}
                                </h2>
                                <p style={{ color: "yellow" }}>{movie.release_date || movie.first_air_date}</p>
                            </div>
                            <button
                                style={{
                                    width: "150px",
                                    height: "50px",
                                    borderRadius: "10px",
                                    backgroundColor: "blue",
                                    color: "white",
                                    fontWeight: "bold",
                                    fontSize: "16px",
                                    border: "none",
                                }}
                            >
                                Посмотреть
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Collections;
